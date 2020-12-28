// 생성자 함수를 이용하여 새로운 객체 만들기
// function Person 은 this 컨텍스트를 생성한다.
// this : 객체 생성시 객체를 가리키는 용도
function Person(name, age) {
  console.log(this);
  this.name = name;
  this.age = age;
}

const p = new Person('Mark', 37);

console.log(p, p.name, p.age);

const a = new Person('Anna', 26);

console.log(a, a.name, a.age);

// arrow function 에서는 새로운 객체를 만들어내는 생성자 함수로 사용할 수 없다.
// this 안 생김.
const Cat = (name, age) => {
  console.log(this);
  this.name = name;
  this.age = age;
}
// 에러 발생
// const c = new Cat('냥이', 1);