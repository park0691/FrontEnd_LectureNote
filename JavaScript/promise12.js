/*
프로미스 객체 여러 개를 생성하여,
배열로 만들어 인자로 넣고 Promise.all 실행하면
배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then 함수가 실행된다.
then 의 함수 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려준다.
*/

// Promise.all([프로미스 객체들])

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  })
}

/* 비동기 작업 여러 개 동시에 시작하고 모두 끝난 후 수행할 때 */
Promise.all([p(1000), p(2000), p(3000)]).then(messages => {
  console.log('모두 fulfilled 된 이후에 실행됩니다.', messages);
});