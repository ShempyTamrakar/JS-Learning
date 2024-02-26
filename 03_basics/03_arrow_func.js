
// this keyword - it refers a current context 

// const user = {
//     userName: " shempy",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.userName}, welcome to website`);
//     }
// }

// // user.welcomeMessage // nothing will print

// user.welcomeMessage() //  shempy, welcome to website
// // but if we change the current context so the value is - 
// user.userName = " priyank" // priyank, welcome to website
// user.welcomeMessage() 

// but if we use this keyword in console.log then - 

const user = {
    userName: " shempy",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage // nothing will print

// user.welcomeMessage() 
// // but if we change the current context so the value is - 
// user.userName = " priyank" 
// user.welcomeMessage() 
// console.log(this);
/**
 * Above code output will be  -
 * 
 * shempy, welcome to website
{
  userName: ' shempy',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
 priyank, welcome to website
{
  userName: ' priyank',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
 * 
    NOTE: brwoser k andr global object window object hota hai  
    or yaha code me this ki value ek empyt object aayegi jab hum 
    usko yaha niche console karwa rahe hai function k bahar
 * 
 */

    // function one() {
    //   console.log(this);
    // }
    // one()
    /**
     *  output - jab aap this ko node env me kisi function k andr print karte hai to kuch aisi value aati hai
     * 
     * <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/


// function two() {
//   let username = "shempy"
//   console.log(this.username); // undefined
// }
// two()
//2nd way to define function

// const chai = function () {
//   let username = "shempy"
//   console.log(this.username); // undefined
// }
// chai()


/*arrow function basic syntax is () => {} 
but we can also hold the arrow function in variable like the below
*/
// const chai = () => {
//   let username = "shempy"
//   // console.log(this.username); // undefined
//   // console.log(this); // {}
// }
// chai()

//1. basic arrow funtion / explicit return
// const chai = (num1, num2) => {
//   return num1 + num2
// }
// console.log(chai(4, 5));  //9


//{} -> isme return likhna padhta hai
//() ->> is bracket me nhi need hoti hai


//2. implicit arrow function 
// const chai = (num1, num2) => num1 + num2

// const chai = (num1, num2) => (num1 + num2)

// console.log(chai(4, 5));  //9


//3.  if we want to return object then

const chai = (num1, num2) => ({username: 'shempy'}) //{ username: 'shempy' } 
console.log(chai(4, 5));


