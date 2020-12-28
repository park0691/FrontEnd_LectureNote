/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    배열 내장 함수 - slice
*/

const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const sliced = numbers.slice(0, 2);   // 2 앞까지 자르겠다.
console.log(sliced);
console.log(numbers);               // 기존 배열 조작하지 않는다.