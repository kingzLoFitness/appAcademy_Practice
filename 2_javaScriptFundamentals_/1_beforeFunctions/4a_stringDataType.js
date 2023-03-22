/***
 * ####################
 * The String Data Type
 * ####################
 * - a sequence of characters
 * - primative data types
 * - represent texural data
 * -- representing things like messages, names, poems, and so on.
 * 
 * 
 * YOu should be able to:
 * - write strings using correct syntax
 * - use .length to obtain a count of the number of characters that comprise a string
 * - index a string to refer to a single character
 * - concatenate strings together
 */


/**
 * #######################
 * Writing a valid string 
 * #######################
 * - always wrapped by a pair of sing quotation marks (') or by a pair of double quotation marks (")
 * - between the enclosing quotation marks we can put any characters
 * - here are 6 examples of strings:
 */

"potato";
"New York"
"azablan@appacademy.io";
"Follow the yellow brick road, please!";
"365 days a year";
"";

/**
 * Notice Above: free to mix any characters into a string 
 * - this includes spaces, numerics, punctuation, and other symbols
 * - the sixth string above is the empty string; it contains zero characters!
 */

// Valid strings
'Shakespeare wrote, "To be or not to be"'
"That's a great string";

// Invalid string
// 'That's a bad string'



/***
 * #######################
 * Calculating Length
 * ########################
 * - since a single string can contain any number of charaters, we may find it useful to count the nuber of characters in a string using
 * .length:
 */
console.log("ramen".length); // => 5
console.log("go home!".length); // => 8
console.log("".length); // => 0


console.log("\n\n Expressions - String Data Type Demo");
console.log("boot".length);
console.log("boot"["boot".length -1]);


console.log("\n\n");

/**
 * #######################
 * Indexing a string
 * #######################
 * - multiple characters
 * - numbered by indices starting at 0
 * - string 'bootcamp', 'b' is at index 0
 * - 'o' is at the index of 1, etc.
 * - we can look at particular characters of a string by using [] and specifying an index:
 * 
 * 
 * - an index should always be a number
 * 
 */
console.log("bootcamp"[0]);     // b
console.log("bootcamp"[1]);
console.log("bootcamp"[2]);
console.log("bootcamp"[3]);
console.log("bootcamp"[7]);
console.log("bootcamp"[10]);    // undefined
console.log("bootcamp"[-3]);    // undefined






/**
 * #######################
 * The clasic "off by one" error
 * #######################
 * - indices begin at 0 and not 1
 * - DO NOT FORGET THAT!!!
 * - the index of the last character of a string is always one less than it's length
 * 
 */
console.log("cat".length);
console.log("cat"[3]);  // undefined
console.log("cat"[2]);  // 't'






/**
 * #######################
 * Using indexOf
 * #######################
 * - the index of char within string 
 * - calculate the index of a given character within a string by using indexOf:
 */
console.log("bagel".indexOf("b"));
console.log("bagel".indexOf("a"));
console.log("bagel".indexOf("l"));
console.log("bagel".indexOf("z"));

/**
 * if we attempt to search for a character that is not presint in a string, indexOf will return -1
 * - -1 is not a valid string index
 * - the smallest index possible is 0
 */

/**
 * if we search for a character that appears more than once in a string, indexOf will return the index of the first occurance of that character
 * 
 * 
 * 
 * 
 * we can also use indexOf to search for a substring of characters
 * - indexOf will return the index where the substring begins in the main string:
 */
console.log("door hin1ge".indexOf("oor"));
console.log("door hinge".indexOf("hi"));
console.log("door hinge".indexOf("hint"));

/**
 * #######################
 * Concatenation
 * #######################
 * - joining strings together into a single string
 * - use the + operator:
 * 
 */
console.log("Concatenation");
console.log("hello" + "World"); 
console.log("goodbye" + " " + "moon");


/**
 * #######################
 * 
 * #######################
 * 
 * 
 */



/**
 * #######################
 * 
 * #######################
 * 
 * 
 */



/**
 * #######################
 * 
 * #######################
 * 
 * 
 */



/**
 * #######################
 * 
 * #######################
 * 
 * 
 */
