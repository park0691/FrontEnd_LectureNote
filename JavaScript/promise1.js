/*
ES6 부터 JS의 표준 내장 객체로 추가됨.
*/

console.log(Promise);

/*
생성자로 프로미스 객체 생성 가능
생성자의 인자로 executor 함수를 이용한다.
*/

new Promise(/* executor */)

/*
executor 함수는 resolve, reject를 인자로 가진다.
  (resolve, reject) => { ... }
  resolve, reject는 함수다.
*/

new Promise(/* executor */ (resolve, reject) => {});

/*
생성자로 프로미스 객체를 만드는 순간 pending (대기) 상태라고 한다.
*/

new Promise((resolve, reject) => {}); // pending

/*
executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled (이행) 상태가 된다.
*/

new Promise((resolve, reject) => {
  //
  // ...
  resolve();  // fulfilled
});

/*
executor 함수 인자 중 하나인 reject 함수 실행하면, reject (거부) 상태가 된다.
*/

new Promise((resolve, reject) => {
  reject();   // rejected
});

/*
p 프로미스 객체는 1000 ms 후에 fulfilled
*/

new Promise((resolve, reject) => {
  /* pending */
  setTimeout(() => {
    resolve();  /* fulfilled */
  }, 1000);
});