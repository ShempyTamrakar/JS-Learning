/*global and local scope topic - 

1. global scope - Avariable declared at a top of a program 
or outside of a function isconsidered a global scope variable. 

2. local scope - a variable can also have a local scope i.e. 
it can only be accessed within a function or it is a blocked scope.


3.
When we go to the browser, the method is different when we see the global scope in the console
 or the global scope through node is declared in a different way.
*/

// var c = 300
let a = 300
if(true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("block scope value: ", a); //10 
    // console.log("block scope value: ", b); //20
    // console.log("block scope value: ", c);//30
}

// console.log("global scope without declaring in global value: ", a); // a is not defined
// console.log("global scope without declaring in global value: ", b); //b is not defined
// console.log("global scope without declaring in global value: ", c); //30 even if globally declaredwith same name the value will be override


// console.log("global scope with declaring in global value: ", a); //300


//nested scope example
// in nested scope we can access the parent data into the child funtion 
//but we can't access the data of child function inside parent function.

function one() {
    const username = "shempy"

    function two() {
       const website = "youtube"
       console.log(username);  //shempy
    }
    // console.log(website); // website is not defined error

    two()
}
// one()


// if else through same as above function example

if (true) {
    const username = "shempy"
    if (username== "shempy") {
        const website = " youtube"
        // console.log(username + website); // shempy youtube 
    }
    // console.log(website); // website is not defined error
}
// console.log(username); // website is not defined error



/** ****************** interesting topic and important  ************** */

// //1st way to define

// function addOne(num) {
//     return num + 1
// }
// // console.log(addOne(5)); // 6 

// //2nd way to define isko expression bhi keh sakte hain
// const addTwo = function(num) {
//     return num + 2
// }
// // console.log(addTwo(5)); // 7


/******************** hoisting example  ********************* */


//1st way to define
console.log(addOne(5)); // 6 - accessing not giving an error
function addOne(num) {
    return num + 1
}
 

//2nd way to define isko expression bhi keh sakte hain
console.log(addTwo(5)); // Cannot access 'addTwo' before initialization (error arises)
const addTwo = function(num) {
    return num + 2
}
