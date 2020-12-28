/*
  벨로퍼트와 함께하는 모던 자바스크립트 입문 - 김민준 강사
    Getter, Setter 함수
*/

const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
}

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;

console.log(Object.entries(numbers));
console.log(Object.keys(numbers));
console.log(Object.values(numbers));