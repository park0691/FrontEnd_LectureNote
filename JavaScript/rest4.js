/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.
*/

function max(...numbers) {
  return numbers.reduce(
    (acc, current) => (current > acc ? current : acc),
    numbers[0]
  )
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);