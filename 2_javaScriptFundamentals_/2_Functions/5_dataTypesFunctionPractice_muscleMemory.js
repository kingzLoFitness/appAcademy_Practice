/**
 * ###################################
 * Muscle Memory
 * ###################################
 * 
 * Practice typing the syntax for functions. Write 10 functions with different messages and console log them. Focus on using proper style and indentation. Be sure to test your code by running it after each repetition. You'll be surprised and also annoyed at what details you missed! Learn from those typos now and make your life easier.
 */


function sayHello(name) {
    let msg = "Hello, " + name + ". How are you?";
    return msg;
  }
  
  console.log(sayHello("world"));


function uberOrder(restaurant) {
    let order = "Going out to " + restaurant + " for pickup.";
    return order;
}

console.log(uberOrder("Wendys"));



function userName(name) {
    return "Hello " + name + " and welcome."

}

console.log(userName("Kingsley"));




function addNumbers(num1, num2) {
    return "Total of " + num1 + " and " + num2 + " is " +  (num1 + num2) + ".";
}

console.log(addNumbers(5, 4));


function greetings(username) {
    return `Welcome ${username}`

}

console.log(greetings("kingzlofitness"));



function password(password) {
    return `The password you entered is ${password}.`
}

console.log(password("asdf"));


console.log("\n\nWhat is your favorite color?")
function favColor(color) {
    return `Your favorite color is: ${color}`
}

console.log(favColor("green"));



/***
 * 
 * Ask a question and create a function that will give the answer
 */
console.log("\n\nA boolean question.  How would you judge yourself?")

function judgement(consderation) {
    return `You seem to think you are ${consderation}.`
}

console.log(judgement("good"))



console.log("\n\nWhat is your faorite food?");

function favFood(foodType) {
    return `My favorite food is: ${foodType}.`
}

console.log(favFood("fruits"));


console.log("\n\nScale of 1-10, how are you?");

function feelingToday(feelingScale) {
    return `I feel like a ${feelingScale} today.`
}

console.log(feelingToday("9"));



console.log("\n\nHow much do you weigh?");

function measureSelf(amountOfWeight) {
    return  `My weight is ${amountOfWeight}.`
}

console.log(measureSelf(170));