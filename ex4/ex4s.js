function foo(v) {
  return function() {
    return v;
  };
}

function add(x, y) {
  return x + y;
}

function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

function addn(arr) {
  return arr
    .slice(1)
    .map(foo)
    .reduce(function(prev, cur) {
      return function() {
        return add2(prev, cur);
      };
    }, foo(arr[0]))();
}

function isEven(v) {
  return v % 2 == 0;
}

var valsx = [foo(10), foo(100), foo(30), foo(100), foo(42), foo(10), foo(15)];
var vals = [10, 100, 30, 100, 42, 10, 15].filter(isEven);

console.log(addn(vals));
