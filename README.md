# JavaScript Type Coercion in Arithmetic Operations

This repository demonstrates a common error in JavaScript involving type coercion in arithmetic operations. Specifically, it shows how the + operator behaves differently when dealing with numbers and strings.

## The Problem

JavaScript's + operator performs both addition and string concatenation. If one operand is a number and the other is a string, JavaScript converts the number to a string and then concatenates the two strings. This is different from other languages (e.g., Python) that will throw errors or convert strings to numbers.

This can lead to unexpected results if you are not aware of this behavior. For example, the following code snippet:

```javascript
function foo(a,b){return a+b;}
console.log(foo(1,2)); //3
console.log(foo(1,"2")); //12
```

will output 3 for the first `console.log` call (1 + 2 = 3) and 12 for the second (`1` + `"2"` = `"12"`).  The second result is likely unexpected by most programmers.

## The Solution

To avoid this error, you need to ensure that both operands are of the same type (i.e., numbers). This can be done by explicitly converting strings to numbers using functions like `parseInt()` or `parseFloat()`, or by using the unary plus operator (+).