/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    배열 내장 함수 - forEach
*/

const superHeros = [
  '아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'
];
// 배열 원소에 대해서 작업을 일괄적으로 하고 싶을 때 forEach
// (1)
function print(hero) {
  console.log(hero);
}

superHeros.forEach(print);

// (2)
superHeros.forEach(function(hero) {
  console.log(hero);
});

// (3)
superHeros.forEach(hero => {
  console.log(hero);
});