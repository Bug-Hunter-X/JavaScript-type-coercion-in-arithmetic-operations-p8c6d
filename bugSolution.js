function foo(a,b){
  a = parseInt(a);
  b = parseInt(b);
  return a + b;
}
console.log(foo(1,2)); //3
console.log(foo(1,"2")); //3

function foo2(a, b) {
  return +a + +b; // Use unary plus operator for type coercion
}

console.log(foo2(1, "2")); // 3