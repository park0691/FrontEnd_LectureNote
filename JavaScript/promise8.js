/*
보통 비동기 작업할 때 콜백 함수를 인자로 넣어 로직이 끝나면 콜백 함수를 호출한다.
이런 경우 함수가 아래로 진행되지 않고, 콜백 함수 안으로 진행된다.
=> Callback Hell
*/

function c(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

c(() => {
  console.log('1000ms 후에 콜백 함수가 실행됩니다.');
});

c(() => {
  c(() => {
    c(() => {
      console.log('3000ms 후에 콜백 함수가 실행됩니다.');
    });
  });
});


function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000)
}

increaseAndPrint(0, n => {
  increaseAndPrint(n, n => {
    increaseAndPrint(n, n => {
      console.log('작업 끝!');
    })
  })
});