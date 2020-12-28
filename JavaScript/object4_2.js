// (4) prototype 체인

function Person(name, age) {
  this.name = name;
  this.age = age;
}

/*
  prototype 역할
  객체 생성자로 무언가 만들었을 때 만든 객체들이 공유할 수 있는 값이나 함수를 프로토타입으로 설정
*/
Person.prototype.hello = function() {
  console.log('hello', this.name, this.age);
}

const p = new Person('Mark', 37);

p.hello();
console.log(p.toString());    // [object Object]

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
// console.log(Person.hello); /* 객체가 생성되기 전에 hello 생성 x */
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

// p라는 객체는 Person 생성자 함수로부터 나왓는데 
// Person은 Object로부터 prototype 체인 받아온 후에
// 내가 설정한 함수와 property를 가진 형태.
// 클래스 키워드를 이용해서 객체 확장.
// 자바스크립트는 태생적으로 프로토타입 이용한 상속 방식을 채택했다. 
console.log(p instanceof Person);
console.log(p instanceof Object);