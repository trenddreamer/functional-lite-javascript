function bar(x, y) {
  var z;
  foo();

  function foo() {
    y++;
    z = x * y;
  }
  return [z, y];
}

z;

bar(20, 5);
z; // 120

bar(25, 6);
z; // 175
