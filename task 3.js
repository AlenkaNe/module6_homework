let a = 7;
let b = 8;
function Func(func1) {
  func1();
  return function() {
    console.log(a)
  }
}
  function argFunc() {
    console.log(a+b)
  }
const result = Func(argFunc);
result();