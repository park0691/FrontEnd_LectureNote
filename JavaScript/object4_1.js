// (4) prototype 체인

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function() {
    console.log('hello', this.name, this.age);
  };
}

const p = new Person('Mark', 37);

p.hello();
// toString()은 작성하지 않은 함수이므로 에러가 나야 하지만, 결과가 출력된다.
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
// 객체로 생성되야 hello함수로 사용되므로 undefined 출력
console.log(Person.hello);
console.log(Person.prototype.hello);