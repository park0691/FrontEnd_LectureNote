// 생성자 함수로 함수를 만드는 방법
// Function은 객체의 한 형태.
// new Function(/* 인자1, 인자2, ..., 함수 바디 */)

const sum = new Function('a', 'b', 'c', 'return a + b + c');

console.log(sum(1, 2, 3));

// scope
global.a = 0;
// 함수는 global 변수 참조한다.
{
  const a = 1;
  
  const test = new Function('return a');

  console.log(test());
}

// 함수는 지역 변수 참조한다.
{
  const a = 2;
  const test = function() {
    return a;
  }

  console.log(test());
}