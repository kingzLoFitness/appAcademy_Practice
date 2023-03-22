/**
 * #############################
 * Basic Concept
 * #############################
 * We only "write" a function once (function declaraton), but we can "use" it as many times as we please (function calls).
 * 
 */


/**
 * #############################
 * Function Definition Break Down
 * #############################
 * 1. The name of the function.
 * 2. A list of parameters to the function, enclosed in parentheses, ().
 * 3. The code to be run when this function is run, enclosed in curly brackets, { }.
 */





/**
 * #############################
 * Example Function Definition
 * #############################
 * 
 */
function thisIsMyName(parameter1, parameter2){
    // code to be run when this function is invoked (called)
}

// function invocatoin
thisIsMyName("argument1", "argumnt2");


/**
 * #############################
 * Order of Code
 * #############################
 * 
 */
function testMe() {
    console.log("test me please!");
}
// nothing happens!

// You need to invoke the function to run the code within:
testMe();
// => prints "test me please!"




/**
 * #############################
 * Default Return Value
 * #############################
 * 
 */
function addTwo(num1, numb2) {
    num1 + num2;
}

console.log(addTwo(1,2));   // => undefined





/**
 * #############################
 * You need to return value
 * #############################
 * 
 */
function addTwo1(num1, numb2) {
    return num1 + num2;
}

console.log(addTwo1(1,2));   // => 3







/**
 * #############################
 * Order of running code with the return keyword
 * #############################
 * 
 */
function testMe2() {
    return true;
    // anything blow the first return will NOT be run!
    return false;
}

console.log(testMe2());   // => true




