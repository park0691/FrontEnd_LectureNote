/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
*/
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {   // 선언된 함수는 자동으로 프로토타입에 등록된다.
    console.log(this.sound);
  }
}

console.log(Animal.prototype.say);

class Dog extends Animal {
  constructor(name, sound) {
    super('개', name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super('고양이', name, sound);
  }
}

const dog = new Dog('멍멍이', '왈왈');
const cat = new Cat('야옹이', '야옹');
const cat2 = new Cat('고양이', '야오오옹');

dog.say();
cat.say();
cat2.say();