// 함수, 클래스 (틀) => 객체, object
// (1) 생성자 함수로 객체 만들기
// function 틀 () {} => new 틀();
function A() {}

const a = new A();
console.log(a, typeof a);
console.log(A());   // 함수 실행 -> 생성자 함수가 아니므로 객체 만들지 않고 A함수 리턴값 가져온다.

// 생성하면서 데이터 넣기
function B(name, age) {
  console.log(name, age);
}

const b = new B();
const c = new B('Mark', 12);
// B()의 리턴값 undefined
console.log(B());