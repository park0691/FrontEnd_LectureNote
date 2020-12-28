/*
then 을 설정하는 시점을 정확히 하고,
함수의 실행과 동시에 프로미스 객체를 만들면서 pending 이 시작되도록 하기 위해
프로미스 객체를 생성하면서 리턴하는 함수 p를 만들어 함수 p 실행과 동시에 then을 설정한다.
실제 대규모 프로젝트에서 코딩할 때 사용하는 방법
*/

function p() {
  return new Promise((resolve, reject) => {
    /* pending */
    setTimeout(() => {
      resolve();  /* fulfilled */
    }, 1000);
  });
}

p().then(() => {
  console.log('1000ms 후에 fulfilled 됩니다.');
});