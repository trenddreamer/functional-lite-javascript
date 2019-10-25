function bar(x, y) {
  foo();

  function foo() {
    y++;
    z = x * y;
  }
}

z;

bar(20, 5);
z; // 120

bar(25, 6);
z; // 175
