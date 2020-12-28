/*
  기본 타입 (Primitive values)
  Boolean, Null, Undefined, Number, String, Symbol
  객체 (Objects)
*/

const isTrue = true;
const isFalse = false;

console.log(isTrue, typeof isTrue);
console.log(isFalse, typeof isFalse);

// 표준 내장 객체로 선언 가능
const a = new Boolean(false);

console.log(a, typeof a);

// 오브젝트는 조건문에서 true로 평가된다.
if (a) {
  console.log('false?');
}

const b = Boolean(false); // 매개변수로 평가될 수 있는 다른 값 (0 또는 1) 넣는다.

console.log(b, typeof b);

if (b) {
  console.log('false_b?');
}