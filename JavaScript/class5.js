// get, set
// underbar - 내부(getter, setter) 에서 사용
class A {
  _name = 'no name';

  get name() {
    return this._name + '@@@';
  }

  set name(value) {
    this._name = value + '!!!';
  }
}

const a = new A();
console.log(a);
a.name = 'Mark';    // setter 호출
console.log(a);
console.log(a.name);  // getter 호출
console.log(a._name); // 잘 안씀

// readonly
class B {
  _name = 'no name';

  get name() {
    return this._name + '@@@';
  }
}

const b = new B();
console.log(b);
b.name = 'Mark';    // setter 없으므로 동작 안 함
console.log(b);