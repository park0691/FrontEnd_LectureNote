// override
// 클래스의 상속 멤버 변수 및 함수 오버라이딩, 추가
// 자식이 만든 함수가 부모의 함수를 덮어 쓴다.

class Parent {
  name = 'Lee';

  hello() {
    console.log('hello', this.name);
  }
}

class Child extends Parent {
  age = 37;

  hello() {
    console.log('hello', this.name, this.age);
  }
}

const p = new Parent();
const c = new Child();

console.log(p, c);
c.hello();
c.name = 'Anna';
c.hello();