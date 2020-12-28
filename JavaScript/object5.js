// (5) 프로토타입을 이용한 객체 확장
// prototype 상속

function Person () {}

Person.prototype.hello = function () {
  console.log('hello');
}

function Korean(region) {
  this.region = region;
  this.where = function () {
    console.log('where', this.region);
  };
}

Korean.prototype = Person.prototype;

const k = new Korean('Seoul');

k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);

/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
*/

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
}

function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;
