// thunk
function foo(x) {
  return function() {
    return x;
  };
}

function add(x, y) {
  return x + y;
}

function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

//add2(foo(10), foo(42)); //52

//with loop
function addn(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = add2(foo(arr[i]), foo(sum));
  }
  return sum;
}

//recursion with add
function addn(vals) {
  if (vals.length > 2) {
    return addn([add(vals[0], vals[1])].concat(vals.slice(2)));
  }
  return add(vals[0], vals[1]);
}
//recursion with add2
function addn(arr) {
  if (arr.length <= 2) {
    return add2(foo(arr[0]), foo(arr[1]));
  }
  return add2(foo(arr[0]), foo(addn(arr.slice(1))));
}
//map and reduce with add2
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

addnr([10, 42, 56, 73]);
