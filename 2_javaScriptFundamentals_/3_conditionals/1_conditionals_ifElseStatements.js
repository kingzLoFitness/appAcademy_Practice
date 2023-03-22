/***
 * ##############################
 * Conditionals
 * ##############################
 * 
 * - time to satet writing functions that can do things conditionally by utilizing control flow
 * - control flow is the order in which instructions are executed within a program.
 * 
 * - one modifies control flow using control structures, expressions that alter the control flow based on given parameters
 * - the control structures within JavaScript allow the program flow to change within a unit of code or a function
 * 
 * - this reading will be covering one of the two main control structures you will use time and time again - 
 * - conditional statements
 * - used to perform different actions based on different conditions.
 * 
 * 
 * 
 * when finish this reading, you shouild be able to:
 * - write if, else if, if...else conditional statements
 * - know that conditional statemnts can have only one if and one else statement
 * - identify that conditional statements can be nested
 * 
 * 
 * 
 * 
 * ###############################
 * A Quick Word on Syntax
 * ###############################
 * - some terms we'll be using to represent syntax
 * 1. [ ] are square brackets
 * 2. { } are curly braces
 * 3. ( ) are parentheses
 * 
 * 
 * ###############################
 * Writing Conditional Statements
 * ###############################
 * - Conditional Statements are the second fundamental control structure for writing JavaScripa dn are pretty straightforward.  
 * - The simplest conditional statment is the if statment
 * - an if statement has two parts, the test eression (the code that immediately follows the if which goes in parentheses), and the then expression (this code belongs in curly braces ({ }) aft the if expression).
 * - the then expressoin will only run when the if expresson is truthy.
 * Example:
 * 
 */

// this is the test expression 
if (3 === 3) {
    // this is the then expession 
    // this code will run if the above statement is true
    console.log("this is a three!");
}


/**
 * the if statement abve allows you to specify what should happen if your particular expression evaluates to true
 * - you can chain additoinal text expressoins onto this if statement by using a else if statement
 * 
 * - the syntax fr else if is very similar to an if statement:
 * 
 */

function mathFun() {
    let x = 2 + 3;

    if (x == 3) {
        console.log("We have a 3");
    } else if (x === 4) {
        // this code will run if the above statement is true
        console.log("We have a 4")
    } else if (x === 5) {
        // this code will run if the above statement is true
        console.log("We have a 5")
    }
};

mathFun();



/**
 * - the else if and if statements do not, however, provide the option to specify something esle that sould happen in the even that all of the above expressions evaluate to be falsey.
 * - the if...else statement reads just like english.  
 * - the JS interpreter will execute the else statement if all the above conditions given are falsey .
 * - see below for example:
 
 */

function mathFun() {
    let x = 19;
    if (x === 3) {
        console.log("We have a 3");
    } else if (x === 4) {
        console.log("We have a 4");
    } else {
        console.log("I will return if everything above me is falsey!");
    }
};

mathFun(); 




/**
 * You can cahin an arbitrary number of else if statements but there can only be one if statement and one optional else statement.
 * - the if introduces the control structure and the ese acts as a fai safe to catch everything that didn't meet the above conditions.
 * 
 * 
 * - Only one then expression is ever executed in an if, if...else, or if...else statement
 * - if one of the text expressions is truthy, then the result of its then expression is the result of the entire conditional statement:
 * 
 */

let x = 3;
if (x === 3) {
    console.log("this wll run");
} else {
    console.log("this will not run");
}



/**
 * Additionally you can nst conditional statements within each other,
 * - but it will quickly become difficult to read and it is discouranged:
 */
function mathFun2(x) {
    if (x === "math") {
        if (x === "math" && x[0] === "m") {
            if (x[1] === "a") {
                console.log("this got confusing fast");
            } else {
                console.log("that os not math!");
            }
        } else {
            console.log("that is for sure not math!");
        }
    } else {
        console.log("I will return if everything above me is false!");
    }
};

mathFun2("math");   // => "this got confusing fast"



/**
 * ################################
 * What You Learned
 * ################################
 * - conditinal statements allow us to control what actions should be taken based on a boolean (truthy or falsey) expression
 * - in a chain of then expressions (if...else if...else), only one of the then expressions will be executed.
 * - Conditional statements can have ony one if and one else statement
 * - Conditional statements can be nested.
 */


