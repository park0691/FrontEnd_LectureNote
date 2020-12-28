/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    배열 내장 함수 - Map
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8];

// (1)
const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

// (2)
const squared2 = [];
array.forEach(n => {
  squared2.push(n * n);
})

// (3) 
const squared3 = array.map( n => n * n );

const item = [
  {
    id: 1,
    text: 'hello'
  },
  {
    id: 2,
    text: 'bye'
  }
];

const texts = item.map(item => item.text);
console.log(texts);