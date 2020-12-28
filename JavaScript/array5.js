/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    배열 내장 함수 - splice
*/

const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 1);
console.log(spliced);
console.log(numbers);