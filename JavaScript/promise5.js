/*
executor의 resolve 함수를 실행할 때 인자를 넣어 실행하면, then의 콜백 함수의 인자로 받을 수 있다.
  resolve('hello');
  then((message) => { });
자주 사용하는 파트
*/

function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      resolve('hello');  /* fulfilled */
    }, 1000);
  });
}

p()
  .then((message) => {
    console.log('1000ms 후에 fulfilled 됩니다.', message);
  })
  .catch(() => {
    console.log('1000ms 후에 rejected 됩니다.');
  });