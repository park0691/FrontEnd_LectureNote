/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    rest 문법 - 함수 인자와 spread
*/

function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sum(...numbers));

function subtract(x, y) {
  return x - y;
}
const numbers2 = [1, 2];
console.log(subtract(...numbers2));