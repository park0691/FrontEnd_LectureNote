// 익명함수를 만들어 변수에 할당하는 방법
// 이름이 hello1 함수 선언

const hello1 = function() {
  console.log('hello1');
}

// function 표준 내장 객체
console.log(hello1, typeof hello1);

// 함수의 매개변수
// 함수를 호출할 때 값을 지정

const hello2 = function(name) {
  console.log('hello2', name);
}

// 함수의 리턴

const hello3 = function(name) {
  return `hello3 ${name}`;
}