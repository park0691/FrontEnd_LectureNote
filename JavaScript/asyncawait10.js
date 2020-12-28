/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    async, await
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 에러 처리
async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process2() {
  try {
    await makeError();
  } catch(e) {
    console.error(e);
  }
}

process2();

// resolve 처리
async function process() {
  console.log('안녕하세요!');
  await sleep(1000);
  console.log('반갑습니다!');
  return true;
}

process().then(value => {
  console.log(value);
});
