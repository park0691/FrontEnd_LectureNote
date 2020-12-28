// (3) Object로 객체 만들기 (권장 x)
// new Object()

const a = new Object();

console.log(a, typeof a);

const b = new Object(true);

console.log(b, typeof b);

const c = new Object({name: 'mark'});

console.log(c, typeof c);