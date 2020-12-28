/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    배열 내장 함수 - filter
*/

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

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);