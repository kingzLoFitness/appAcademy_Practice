// Number Data Type

// Basic Arithmetic Operators
// expressions within console
console.log(2 + 3);
console.log(42 - 42);
console.log(-4 * 1.5);
console.log(25 / 8);

// Grouping Operator
console.log(5 * 3 + 2);
console.log(2 + 3 * 5);
console.log((2 + 3) * 5);

/* 
Remainder Operator
- the remainder that results fro a division
- also known as modulo
*/
console.log();
console.log("Remainder Operator (Modulo)");

console.log(10 % 3);
console.log(14 % 5);
console.log(20 % 17);
console.log(18 % 6);
console.log(7 % 9);


/**
 * in order of operations, the modulo has the same precedence as multiplication-diviion.  So our complete order of math operations in JS is parentheses, multiplication-division-modulo, addition-subtraction.
 */

console.log();
// modulo has precedence over addition
console.log(4 + 12 % 5);
console.log((4 + 12) % 5);