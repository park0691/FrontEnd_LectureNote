/*
value가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메소드 실행
  value가 프로미스 객체면, resolve된 결과를 받아 then 메소드 실행
  value가 프로미스 객체가 아니면, value를 인자로 보내면서 then 메소드 실행
*/

Promise.resolve(/* value */);

Promise.resolve(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 1000)
  })
).then((data) => {
    console.log('프로미스 객체인 경우, resolve 된 결과를 받아 then 이 실행됨.', data);
  }
);

Promise.resolve('bar').then(data => {
  console.log('then 메소드가 없는 경우, fulfilled 됨.', data);
});