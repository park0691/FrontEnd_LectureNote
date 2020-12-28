console.log(hello2);  // undefined

// hello2(); -- hello2는 undefined

hello1();

// 선언적 방식 (함수가 먼저 메모리에 올라가 있어서 사용에 문제 없음)
function hello1() {
  console.log('hello1');
}

hello1();
hello3();


// 익명 함수 할당
// 호이스팅 일어남
var hello2 = function() {
  console.log('hello2');
}

const hello3 = function() {
  console.log('hello3');
}