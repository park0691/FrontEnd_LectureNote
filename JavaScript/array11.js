/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    배열 내장 함수 - reduce
*/

const numbers = [1, 2, 3, 4, 5];
/*
  function reduce
  parameter
  1st : callback 함수
    accumulator : 누적된 값
    current : 현재 배열 원소
  2nd : 초기 accumulator
*/
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

let avg = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  } else {
    return accumulator + current;
  }
}, 0);

console.log(avg);

// 각 알파벳의 개수
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((acc, current) => {
  console.log({acc, current});
  if (acc[current]) {
    acc[current]++;    
  } else {
    acc[current] = 1;
  }
  return acc;
}, {})

console.log(counts);