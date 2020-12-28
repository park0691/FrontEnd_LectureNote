// super
// 클래스의 상속 생성자 함수 변경

class Parent {
  name;

  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log('hello', this.name);
  }
}

class Child extends Parent {
  age;

  constructor(name, age) {
    super(name);
    this.age = age;
  }

  hello() {
    console.log('hello', this.name, this.age);
  }
}

const p = new Parent('Mark');
const c = new Child('Mark', 37);

console.log(p, c);
c.hello();