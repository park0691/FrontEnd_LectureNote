// 함수 먼저
function hello1() {
  console.log('hello1');
}

hello1();

// 함수의 호출을 먼저
hello2();

function hello2() {
  console.log('hello2');
}

// hoisting : 아래에 있는 선언을 끌어올린다