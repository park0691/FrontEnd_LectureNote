/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    배열 내장 함수 - shift, unshift
*/

const numbers = [10, 20, 30, 40];

// 앞에서부터 원소를 꺼낸다.
const value = numbers.shift();
numbers.shift();
console.log(value);
console.log(numbers);

numbers.unshift(5);
console.log(numbers);