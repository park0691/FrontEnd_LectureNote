/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    rest 문법
*/

const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, attribute,  ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);