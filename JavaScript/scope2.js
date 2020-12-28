// var 의 유효 범위 -> 함수 스코프
var a = 0;

(function() {
  a++;
  console.log(a);
})();

console.log(a);

(function() {
  // b는 함수 내에서 유효함
  var b = 0;
  console.log(b);
})();

b++;
console.log(b);