//below is function definitation
function sayMyName(){
console.log("s");
console.log("h");
console.log("e");
console.log("m");
console.log("p");
console.log("y");
}

//function reference is - sayMyName
// sayMyName;

//function execution is - sayMyName()
// sayMyName();

/**
 * Now here we got the output i.e. - 
s
h
e
m
p
y
 */

//1. jab bhi function ki definition banate hainn toh jo bhi input lete hai wo PARAMETER kehalati hai


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

//2. jab function ko call karate hai toh jo pass karte hainn usko ARGUMENT kehate hai.

//3. in the below execution we haven't give any ARGUMENT that's why it returns - NaN

// addTwoNumbers()

//this is creating an issue because we haven't check before print that is it number only.
// addTwoNumbers(5, 8) //13

// addTwoNumbers(5, "9") //59

// addTwoNumbers(5, "a") //5a


// const result = addTwoNumbers(5, 8)  //13

/*NOTE: undefined isliye aa raha hai kuki 
console karne ka ye matlab nhi hain ki wo function value bhi return kar raha hain.
return apne aap me ek concept hain or console means sirf ek console print karna hain.
*/
// console.log(result); // undefined


// 2nd Way to write function
//NOTE: in function after the return nothing will be executed its a rule of function return.

function addTwoNumbers(number1, number2) {
    //1st way to return
    // let result = number1 + number2
    // return result

    //2nd way
    return number1 + number2
}
const result1 = addTwoNumbers(3, 6)
// console.log("result: ", result1); //9 

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// it will give nothing output bcoz kahi kaha nhi hain na ki kis variable me store karo ya print karo isliye
// loginUserMessage("hitesh") 

// console.log(loginUserMessage("Shempy")); //Shempy just logged in
// console.log(loginUserMessage("")); //just logged in
// console.log(loginUserMessage()); // undefined just logged in


//NOW USING CONDITION IN FUNCTION - 
// function loginUserMessage(username){
//    //1st way
//     // if(username === undefined){
//     //     console.log("Please enter a username");
//     //     return
//     // }

//     //2nd way meaning are same bas likhne ka tarika alg hua hai
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in` //undefined
// }
// console.log(loginUserMessage("Shempy")); //Shempy just logged in
// console.log(loginUserMessage()); // Please enter a username

// if we want to avoid undefined value one more way is there i.e. to define a DEFAULT VALUE

// function loginUserMessage(username = "priyank"){
//     //1st way
//      // if(username === undefined){
//      //     console.log("Please enter a username");
//      //     return
//      // }
 
//      //2nd way meaning are same bas likhne ka tarika alg hua hai
//      if(!username){
//          console.log("Please enter a username");
//          return
//      }
//      return `${username} just logged in` 
//  }
// ab is case me if kabhi run hi nhi hoga kuki kuch parameter nhi bhi diya to default value execute ho jayegi.  
//  console.log(loginUserMessage()); //priyank just logged in
//  console.log(loginUserMessage("Shempy")); //Shempy just logged in

// here we use rest operate and to define rest and spread is same.
//1st way -
// function calaculateCartPrice(...num1){
//     return num1;
// }

// console.log(calaculateCartPrice(200, 400, 400, 600)); // [ 200, 400, 400, 600 ]
 
//2nd way
function calaculateCartPrice(val1, val2, ...num1){
        return num1;
    }
// console.log(calaculateCartPrice(200, 500, 400, 600));// [ 400, 600 ] becoz in 
//val1 200 is there and in val2 500 is there

//object data access by function
const user = {
    username: "shempy",
    price: 999
}

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user) // User name is shempy and price is 999
// handleObject({
//     username: "priyank",
//     price: 399
// })      // User name is priyank and price is 399

// now by using array

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([555, 777, 222])); //777

