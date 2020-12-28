/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    배열 내장 함수 - indexOf, findIndex, find
*/

const superHeros = [
  '아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'
];
const index = superHeros.indexOf('토르');
console.log(index);

// 배열 원소가 객체 또는 특수 조건일 때

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true,
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true,
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: false,
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false,
  }
]

const index2 = todos.findIndex(todo => todo.id === 3)
console.log(index2);

const elem = todos.find(todo => todo.done === false);
console.log(elem);