/**
 * #################################
 * Divide by Three
 * #################################
 * Write a method divideByThree(num) that returns the passed in number argument divided by three.
 * 
 */

function divideByThree(num) {
    let divByThree = num / 3.0;
    return divByThree.toFixed(1);
}

console.log(divideByThree(12));

console.log(divideByThree(9)); // => 3.0
console.log(divideByThree(15)); // => 5.0
console.log(divideByThree(98)); // => 32.666666666666664
// NOTE: go over this again for another solution for output


console.log();

console.log(parseFloat(3.14));
console.log(parseFloat("3.14"));
console.log(parseFloat("  3.14  ")  );