/**
 * Variables
 * - used to store information to be referenced and manipulated in a computer program.
 * - they also provide a way of labeling data with a descriptive name (understood more clearly by programmers)
 * 
 * - think of variabes as containers that hold information
 * - label and store data in computer memory
 * - this data can then be used and even changed throughout the lifetime of your program.
 * 
 * 
 * #############################
 * by end of this, you should be able to:
 * 
 * -- declare variables using the let keyword
 * -- assign values to variables using the assigment operator (=)
 * -- use the shortcuts +=, -=. ++, -- to reasign variables
 * -- identify 'undefined' as the default value for anassigned variables
 * #############################
 * 
 * 
 * 
 * - to use variables, you must declare it
 * - variable delaration is the act of introducing the variable to the environment
 * 
 * to declare, use the let keyword
 * 
 * 
 * 
 * When finished, you should be able to:
 *  - declare variables using the let keyword
 *  - assign values to variables using the assignment operator ( = )
 *  - use the shortcuts +=, -=, ++, -- to assign variables
 *  - identify undefined as the default vaue for unassigned variables 
 */

/*
########
Initializing a variable
###########
 - use of let and =
 - give the variable any name that we wish and assign it a value 
 - once initialized, the variable will evaluate to the value assigned:
*/
let bootcamp = "App Academy";
console.log(bootcamp);

let birthYear = 1978;
console.log(birthYear);

/**
 * did you know?  JavaScript variables names can contain any alphanumeric characters, underscore (_), or dollar sign ($).  
 * - HOwevr they cannot begin with a number. */ 

/***
 * above are examples of how you create variables most of the time (the syntax)
 * 
 * as a best practice, name variables in a way that is desciptive and concise
 * 
 */


/**
 * ###################
 * Declaring a variable
 * ###################
 * - to use a variable, must declare it (introducing the variable to the environment)
 * 
 * - to declare a variable, use the 'let' keyword, followed by a space and then the name of the variable.
 * 
 * 
*/

/** SyntaxError: Identifier 'bootcamp' has already been declared
*/
let bootcamp2;
console.log(bootcamp2);  // undefined

/**
 * once a variable is declared, it will contain undefined as its value
 * - undefined is a common default value in JavaScript
 * - think of undefined as showing that the variable is empty
 */



/**
 * ##########################
 * Assigning a variable 
 * ##########################
 * - once a variabe has been declared, we can assign it a value using single-equals = :
 * 
 */
let bootcamp3;
console.log(bootcamp3);
bootcamp3 = "p1xt Guide";
console.log(bootcamp3);



/**
 * ##########################
 * Manipulating a variable 
 * ##########################
 * - to change the value of a variabe , we need to """reassign""" it a new value with = :
 * 
 */
console.log(" * Manipulating a variable");
// num assigned 
let num = 42;

// evaluates to 50, but will not change the num var to 50
// to change num variable, we must reassign it
console.log(num + 8);
console.log(num);

num = num + 10;
console.log(num);




/**
 * ##########################
 * Assignement Shorthand
 * ##########################
 * - changing the vaue of a number variabe is some thing fairy common in the programming world
 * - luckily there is some shorthand operators we can use:
 * 
 */
console.log("* Assignement Shorthand");
let number = 0;
console.log("Number: " + number);


// equivalent to number = number + 10
number += 10;
console.log("Number: " + number);

// equivalent to number = number - 2
number -= 2;
console.log("Number: " + number);

// equivalent to number = number / 4
number /= 4;
console.log("Number: " + number);

// equivalent to number = number * 7
number *= 7;
console.log("Number: " + number);

// 14
console.log("Number: " + number);



/**
 * other shorthand to add or subtract exactly 1 from a variable, the increment (++) and decrement (--) operators:
 */
console.log("\nOther shorthand (++) and (--)");
let year = 3004;
year++;
console.log(year);

year--;
console.log(year);



/**
 * ##########################
 * NaN
 * ##########################
 * - a common programming mistake 
 * - not a number
 * 
 */
// SideNote: SyntaxError: Identifier 'num' has already been declared

/**
 * the unassigned 'num2' variable contains undefined; adding 3 to undefined results in NaN
 * - in general, any nonsensical arithmetic will result in NaN.
 * - math operations involving undefined is perhaps the most common mistake
 */
let num2;
console.log(num2 + 3);  // NaN

console.log(undefined + 3); // NaN
console.log("fis" * 2);     // NaN


