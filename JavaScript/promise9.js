/*
then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면 비동기 작업을
순차적으로 아래로 표현할 수 있다.
then 에 함수를 넣는 여러 방법을 확인하자.
*/

function p() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

p()
  .then(() => { // (1초 후)
    return p();
  })
  .then(() => p())  // (2초 후)
  .then(p)    // (3초 후) 그냥 p를 바로 넣어서 프로미스를 만들어서 리턴하는 또다른 형태
  .then(() => {
    console.log('4000ms 후에 fulfilled 됩니다.');
  });

/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
*/
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    })
  })
}

increaseAndPrint(0).then(n => increaseAndPrint(n))
.then(n => increaseAndPrint(n))
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e => {
  console.error(e);
})