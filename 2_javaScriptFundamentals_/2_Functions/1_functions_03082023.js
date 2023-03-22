/**
 * #################
 * Functions
 * #################
 * - a procedure of of code that will run when called.
 * - when we write a function, we can use it as many times as we please
 * - we only write a funtion once
 * - writing a function is known as a function declaration or function definition
 * - functions are the fundamental building blocks of JavaScript and mastering them is a big step on the road to JavaScript mastery!
 * 
 * 
 * When finished, you should be able to:
 * - describe what a function in JavaScript is 
 * - demonstrate how to invoke a function 
 * - write a function using function declaration 
 * - use the "return" keyword to return a value from a function
 * 
 */


/**
 * ######################
 * Writing functions
 * ######################
 * - a function is a st of code that will run when called
 * - functions really start to make sense when put in the perspective of solving problems
 * - example, image we want to use code to find average of two given numbers.
 * - this means we'll write code that takes two numbers, adds them together, and then divides their sum by two (the average of two numbers):
 * 
 */
(5 + 5) / 2;
console.log((5 + 5) / 2);

(15 + 3) / 2;
console.log((15 + 3) / 2);

(7 + 2) / 2; 
console.log((7 + 2) / 2);

/**
 * Writing out the same code again and again is tedious
 * - instead, you can define or declare a reuseable function
 */


/**
 * ######################
 * Function declaration
 * ######################
 * - when a function is defined and saved so that we can use it or re-use it later 
 * - when we use a declaraed function, we are calling the function
 * - calling a function is also known as invoking a function
 * - a function call is also known as a function invocation
 * 
 * - the example below declares a funciton named average and invokes it later on
 * 
 * 
 * 
 * a functino definitin consists of the functino keyword, followed by three things:
 * 1. The name of the function
 * 2. A list of parameters to the function, enclosed in parentheses (())
 * 3. The code to be run when this function is run, enclosed in curly braces ({})
 * 
 * 
 * think back to the code written to find the average of two numbers.
 * - instead of manually writing out the math whenever we want to find the average of a new pair of numbers, we could write a function to handle the logic of taking two numbers, adding them together, and then dividing their sum by two.
 * 
 * 
 * 
 * For example, write a function that:
 * - has a function name of average
 * - take in two parameters (numbr1 and number2)
 * - has code to be run that handles the logic of averaging two numbers
 */
function average(number1, number2) {
    return (number1 + number2) / 2;
}

/**
 * notice, we didn't use any real numbers
 * - you always want to write functions to accept as wide a range of data as possible
 * - utilizing the incoming parameters to a function is key to keeping functions flexible and re-usable.
 * 
 * 
 * 
 * in the case of the average function, we want to use it to caculate the average of any two numbers
 * - the parameter for the average function are number1 and number2
 * - in othr words, the average functin expects to be fiven two numbers, that will be referrenced by the variable names, number1 and number2, in the code to be run
 * 
 * 
 * - more on parameters later
 * - for now, know that whn you define a function with parameters you are declaring those parameters as usable variables within that function
 */



/**
 * - know that when you define a function with parameters you are declaring those parameters as usable variables within that function
 */


/**
 * - the beauty of a function is that if we define it in a clever way, it will be highly re-usable with a lot of different data!
 * 
 * example: our average function will work with any two numbers
 */


/**
 * ######################
 * Invoking or calling a function
 * ######################
 * - using the written function once defined, it can be invoked or called as may times as we please
 * 
 * - when we invoke or call a function, we specify the dat for a function to use.
 * - when we specify what data to use for a funciton call, we refer to that process as passing arguments to the function.
 * 
 */

// Function definition
function average1(number1, number2) {
    return (number1 + number2) / 2;
}

// this function call passes the arguments 10 and 16
average1(10, 16);
console.log(average1(10, 16));


/***
 * when we call the function average1(10, 16), we run the code inside the definition for average.  
 * - that is, we plug inthe parameters with real numbers (number1 becomes 10 and number 2 becomes 16).  
 * - think of number1 and number2 as variables that contain the values we pass in when we called function
 * - then we proceed by running the code inside the function.
 * - the parameter names number1 and number2 are used throughout the body of the function and behave like variables
 */

/**
 * ######################
 * Order of code
 * ######################
 * - see how a simple function call works
 * 
 */
console.log("First!");
console.log("Second!");


console.log();
/**
 * jaavscript evaluates code from left-to-right and top-to-bottom
 */


/**
 * however, when JavaScriopt sees a function definition, JavaScriopt will not evaluate the code inside the definition
 * - it will xecute the code inside the definition "only when the function is invoked" 
 * - example: a file with the code 
 * 
 */
console.log("First!");

function callMe() {
    console.log("Second!");
    console.log("Third!");
}

console.log("Fourth!");


/**
 * to get the code withni the callMe to evaluate, we must call the callMe function by invoking it with parentheses (callMe())
 * - 
 */
console.log();


callMe();
/**
 * JS sees we are calling callMe()
 * - at ths point it will look at definition of the callMe function and run the code inside
 * 
 * - once there is no more code to run inside of the callMe function, it jumps back to where we originally invoked callMe()
 * 
 */


/**
 * ######################
 * Returning a value
 * ######################
 *  the inside of the function
 * - we'll start with a statement: Every function in JavaScript returns undefined unless otherwise specified
 * 
 * 
 * - what does that mean???
 */

// declare sayNumber
function sayNumber(number) {
    console.log(number);
}

// call sayNumber handing in the argument of 1
sayNumber(1);   
// Prints one and returns undefined, since nothing was specifically returned then the function returne the default value for a function which is undefined




/**
 * the above example to use keyworkd return to return a value.
 */
function sayNUmber2(number) {
    console.log(number);
    return true;
}

sayNUmber2(1); // Prints 1 and returns true


// back to previous function named average and talk about the return we used there:
function average2(number1, number2) {
    return (number1 + number2) / 2;
}

const result = average(10, 16);
// the function call returns 13
// so the result variable is set to 13

// we can chech what a function returns by printing its results:
console.log(result);        // Prints 13

// Alternatively, we can print the function invocation:
console.log(average(10, 16));   // Prints 13

/**
 * when we call a function, we jump to the function definition and run the code inside
 * - when we hit a return statement, we immediately exit the function, jump back to where we called the function, and evaluate the function call to the value it returned.
 */


/**
 * every function call evaluates to its return value!
 * - in other words, the expression average(10, 16) evaluates to 13 just like how the expression 1 + 1 evaluates to 2.
 */

/**
 * another important rule of the return statement is that it stops function execution immediately.  This means that any code after a return will not be executed.
 */
function average3(number1, number2) {
    let sum = number1 + number2;
    return sum;
    // Anything under the 'return sum' statement will NOT  be executed.
    console.log("this will not run");
    return false;
}

average3(2, 7);  // Returns 9
console.log(average3(2, 7));



/**
 * 3 thngs to remember about return statements is:
 * 1. Every function call evaluates to its return value
 * 2. Every function in JavaScript returns undefined uness a return is specified 
 * 3. Once a return statement is encountered, the function will immediately stop andn return the value, ignoring any code below the return statement
 */







/**
 * ######################
 * The importance of naming
 * ######################
 * a quick but very important side note about good naming
 * - take this to heart rignt now:
 * - good names are important
 * - do yourself and every other programmer reading your code, a favor by always using meaningful function and variable names
 * 
 * 
 * - non descriptive names make our code error-prone
 * - great code reads like english and almost explains itself
 * 
 * 
 * - write correct code, elegant, readable, and maintainable
 * - hold yourself to this high standard
 * 
 * 
 * - as far as syntax goes in JavaScript, always name functions and variables camelCase for multiple words
 * - example: tipCalculator, currentNumber, puppyPartyFinder
 * 
 */




/**
 * ######################
 * What I learned
 * ######################
 * - by writing a function we can reuse code over and over again to solve similar problems with different input data (arguments).
 * - makes life easier and allow to start working on more complex problems
 * 
 * 
 * this reading covered:
 * - how to define and invoke a function in JavaScript
 * - how to use the return keywrd to return a value from a function 
 * - writing readable JavaScript code by using meaningful names and following camelCase conventions for multiple word variables and functions.
 */



