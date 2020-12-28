// Promise 객체 리턴하는 함수

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때

p(1000).then(ms => {
  console.log(`${ms} ms 후에 실행된다.`);
});

// Promise 객체를 리턴하는 함수를 await 로 호출하는 방법

const ms = await p(1000);   // resolve 된 뒤 아랫 문장 수행
console.log(`${ms} ms 후에 실행된다.`);   // 전역 스코프가 async function 아니므로 에러