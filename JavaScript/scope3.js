// 블록 스코프
var c = 0;

{
  c++;
  console.log(c);
}

// var 는 블록 스코프에서 유효한 범위를 가지지 않고
// 함수에서만 구분되는 스코프를 가지므로, var 키워드에는 블록이 있으나 없으나 마찬가지로 동작함.
{
  var d = 0;
  console.log(d);
}

console.log(d);