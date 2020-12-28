const a = Symbol();
const b = Symbol(37);
const c = Symbol('Mark');
const d = Symbol('Mark');

console.log(a, typeof a)
console.log(c === d);

// new 쓰면 안되
// new Symbol();
