// async function 에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴된다.

async function asyncP() {
  return 'Mark';
}

(async function main() {
  try {
    const name = await asyncP();
    console.log(name);
  } catch (error) {
    console.log(error);
  }
})();