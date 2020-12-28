// arrow function
// 함수를 간단히 표현할 수 있다.
const hello1 = () => {
  console.log('hello1');
};

// 함수의 매개변수 (하나일 때, 괄호 생략 가능)

const hello2 = name => {
  console.log('hello2', name);
};

const hello3 = (name, age) => {
  console.log('hello3', name, age);
};

const hello4 = name => {
  return `hello4 ${name}`;
};

const hello5 = name => `hello5 ${name}`;