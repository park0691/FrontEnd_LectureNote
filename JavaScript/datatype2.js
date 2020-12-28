// Null

const a = null;

console.log(a, typeof a);

// Undefined

let b;

console.log(b, typeof b);

b = undefined;

console.log(b, typeof b);

// true 반환, 같은 것으로 평가
if (a == b) {
  console.log(a == b);
}

if (a === b) {
  console.log(a === b);
}