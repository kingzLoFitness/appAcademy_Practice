/**
 * Is Odd
 * 
 * - Write a function isOdd that takes in a number as an argument and returns true if the number is odd and returns false otherwise.
 * 
 * Write two versions of this function, one using conditionals (if) and one without using conditionals.
 * 
 */

function isOddConditional(num) {
    if ((num % 2) !== 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isOddConditional(5));
console.log(isOddConditional(24));

console.log();


function isOdd(number) {
    return (number % 3 !== 0);
}


console.log(isOdd(5));
console.log(isOdd(24));
