// static 변수, 함수
// 객체가 아니고 클래스의 변수와 함수

class A {
  static age = 37;
  static hello() {
    console.log(A.age);
  }
}

console.log(A, A.age);
A.hello();

class B {
  age = 37;
  static hello() {
    console.log(this.age);
  }
}

console.log(B, B.age);  // B.age 는 클래스 변수가 아님.
B.hello();

// 객체에 속한 함수가 아님.
// new B().hello();

class C {
  static name = '이 클래스의 이름을 C가 아니다';
}

// static name 변수 값이 출력 -> 클래스의 이름을 뜻한다.
console.log(C)