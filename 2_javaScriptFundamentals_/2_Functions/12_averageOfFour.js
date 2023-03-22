/**
 * ################################
 * Average of Four
 * ################################
 * Write a function averageOfFour(num1, num2, num3, num4) that takes in four numbers.
The function should return the average of all of the numbers.
 */


function averageOfFour(num1, num2, num3, num4) {
    let result = (num1 + num2 + num3 + num4) / 4;
    return result;
}

console.log(averageOfFour(5, 4, 2, 5));

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5




function averageOfFour(num1, num2, num3, num4) {
    // 1. Sum of the four 
    // 2. divide the sum by four
    // 3. return my new average

    let sum = num1 + num2 + num3 + num4;
    let average = sum / 4;
    return average;

}

console.log();
console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5

