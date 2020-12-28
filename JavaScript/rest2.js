/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    rest 문법 - 함수 파라미터
*/

function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6));