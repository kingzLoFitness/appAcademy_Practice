
/**
 * ######################
 * Parameters and Arguments
 * ######################
 *  * When finished, you should be able to:
 * 1. Identify the differene between parameters and arguments
 * 2. Write a functoin that utilizes declared parameters
 * 3. Invoke a function with passed in arguments

 * 
 */





/**
 * ######################
 * thee difference between Parameters and Arguments
 * - and how to identify which is which
 * ######################
 * 1. Parameters are comma separated variables specified as part of a function's declaration
 * 2. Arguments are values passed to the functoin when it is invoked
 * 
 */

/**
 * so by defining parameters when we declare our function we are effectively setting accessible variables within the function:
 */
function add(firstParameter, secondParameter) {
    console.log(firstParameter + secondParameter);
}

// the add function declares two parameters
add(1, 2);
// when function is invoked we are passing in arguments is assigned to the declared parameters

/**
 * YOu can think of parameters and arguments like a recipe and cooking a recipe
 * - a recipe is a list of ingredients (parameters) and a list of steps (the code to be run).
 * - when someone cooks the recipe (invokes the function), they add the ingredients they actually have (arguemnts)
 * - the result of cooking the recipe is the delicious return value
 * 
 */


/**
 * ######################
 * Extra arguents
 * ######################
 * - in javaScript a function will not throw an erro if the number of arguments passed during a function invocaton is different than the number of parameters listed during functoin declaration
 * - this is very important to know
 * 
 * 
 * let's use the above function to demonstrate:
 */

// this will ignore the 17 and 14
// the first two arguments passed in will be assigned to the first two parameters
add(1, 2, 17, 14);  // => 3

/**
 * notice in the above example we passed in 4 arguments (1, 2, 17 14) to add3.  Since the function was ony looking for two parameters that is all it uses.
 */




/**
 * ######################
 * Not enough arguments
 * ######################
 * - what happens if we pass in less arguments then needed>
 * 
 */
add(5);    // => NaN

/**
 * 1. firstParameter was set to equal the first passed in argument wich in the above caase is 5.
 * 2. Since there is no second argument, secondParameter is declared as a variable but is set to the default value of undefined
 * 3. The function then tries to add 5 to undefined which is definitely not a number!
 * - so we get NaN (Not a Number) printed to the console
 */






/**
 * ######################
 * What you learned
 * ######################
 * - Parameters are variables defined as a part of a functon's declaration
 * - Arguments are values passed to the function when it is invoked
 * - JavaScript functions can accept a different number of arguments than the number of parameters listed during function declaration 
 * 
 */


