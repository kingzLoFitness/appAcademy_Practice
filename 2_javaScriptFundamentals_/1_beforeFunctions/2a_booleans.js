/**
 * - true and false
 * 
 * 
 * Logical Operators
 * ! (not)
 * && (and)
 * || (or)
 * 
 * /
 
/** Logical NOT
 * !
 * - unary operator (single value)
 * 
 */

console.log(!true);
console.log(!false);
console.log(!!false);

console.log();


/**
 * Logical AND
 *  &&
 * - take two boolean values and will only evaluate to true when both input values are true
 * - otherwise it will return false
 */
console.log("\n\n * Logical AND");
console.log(false && false);    // false
console.log(false && true);    // false
console.log(true && false);     // false
console.log(true && true);      // true


/***
 * Logical OR
 *  || 
 * - will take two boolean values and will only evaluate to false when both input values are false.
 * - otherwise it will return true
 * 
 */

console.log();

console.log(false || false);    // false
console.log(false || true);      // true
console.log(true || false);      // true
console.log(true || true);      // true


/**
 *Logical order of operations 
 * - boolean expressoins that consist of multiple logical operations, 
 * - order of operations evaluate ! then && then ||.
 */
 console.log();
 console.log("\n\nLogical order of operations");
 console.log(true || true && false);
 console.log(false && !(false || true));




/**
 * De Morgan's Law
 * - a common mistake in boolean logic is to incorrectly distribute ! across parentheses.
 * 
 * !(A || B) is equivalent to !A && !B
 * !(A && B) is equivalent to !A || !B
 * 
 * in other words, to correctly distribute ! across parentheses, we must also flip the operation within parentheses.  
 * 
 * Beware that:
 * - !(A || B) is not equivalent to !A || !B
 * - !(A && B) is not equivalent to !A && !B  
 */
let a = true;
let b = false;

console.log("\n\n * De Morgan's Law");
console.log(!(a || b));
console.log(!(a && b));


 console.log();





 console.log(true || true && false);

 console.log(false && !(false || true));



 var A = true;
 var B = true;
 var C = false;
 console.log(A || !(B && C));