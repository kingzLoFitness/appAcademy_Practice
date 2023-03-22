/**
 * ################################
 * Mutually Exclusive Conditions
 * ################################
 * - you learned how to write conditional statements
 * - now a littl bit more about how to write them using best practices.
 * 
 * 
 * 
 * when finished, you should be able to:
 * - identify a pair of mutial exclusive conditions
 */



/**
 * ################################
 * When to use if statements
 * ################################
 * - you were given the challenge to write a function that will call another function named 
 *  - bigNumber if the given argument is greater than 100 
 *  - or call a function named smallNumber if the given argument is smaller.
 * 
 */

/*
--- My first attempt

let gNumber = 101;

if (gNumber > 100) {
    console.log(bigNumber());
} else {
    console.log(smallNumbr());
}
*/

function numberSeparator(number) {
    if (number < 100) {
        // number is smaller than 100 so we invoke smallNumber
        samllNumber();
    }
    if (number === 100) {
        // number is equal to 100 so we invoke smallNumber
        samllNumber();
    }
    if (number > 100) {
        // number is larger than 100 so we invoke bigNumber
        bigNumber();
    }
}

/**
 * - the above function uses a lot of code to do a simple task
 * - to be clear the function above would work for our aim- but it repeats itself
 * 
 * - there is an an age old principal for writing good code named DRY or Don't repeat yourself
 * 
 * - as good programmers we always want our ode to be clear, concise, and efficient
 * 
 * 
 * 
 * - a general rule fo thumb is that if you are working with a condition that is mutually exclusive, meaning if one condition is true the other condition must be false, 
 * - then you should use an if/else statment
 * - you can also think of mutually exclusivity like a coin flip - it can be either heads or tails, but not both.
 * 
 * 
 * 
 * - going back to the original problemn at hand we can see it maks intuitive sense with the way the challenge is phrased:
 * - if the number is larger than 100 then we'll call bigNumber,
 * - otherwise we invoke is smallNumber
 * 
 * 
 * 
 */


/**
 * - rewrite the above functino to ead a little more clearly
 */
function numberSeparator2(number) {
    if (number > 100) {
        bigNumber();
    } else {
        smallNumber();
    }
}

// this also works 
function numberSeparator3(number) {
    if (number <= 100) {
        smallNumber();
    } else {
        bigNumber();
    }
}

// these two above are much clearer
// writing good code is an art - devote yourself to becoming an artist



/**
 * #############################
 * What you Learned
 * #############################
 * - how to identify a pare of mutually exclusive conditions
 * - DRY - don't repeat yourself!
 */


