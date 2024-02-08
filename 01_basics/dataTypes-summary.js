/**
 * 1. kis tarah se memory me data ko rakha jaata h 
 * or access kiya jata h us bases par data ka 2 categorization h
 * 
 * 1. primitive dataTypes: they all are call by value 
 *    7 Types:  String, Number, Boolean, null, undefined, 
 *              Symbol-> kis bhi value ko unquie banaane k liye use hota h
 *              BigInt
EXAMPLE TO DEFINE    
const score = 100 
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbole('123')

console.log(id === anotherId); //false 

const bigNumber = 98765432123456789n


 * Is javaScript is statically type or dynamically typed?
 * ANSWER: JavaScript is a dynamically typed language,
 * which means that data types of variables are determined 
 * by the value they hold at runtime and can change throughout
 * the program as we assign different values to them.
 * 
 * 2. non-primitive/ referenced type : 
 *          types: Array, Objects, Functions
 * 
 * const heros = ["shaktiman", "naagraj", "doga"]
 * 
 * let myObj = { 
 *      name: "shempy",
 *      age: 22
 * }
 * 
 * const myFunction = function(){
 *  console.log("hello World")
 * }
 * 
 * console.log(typeOf bigNumber)
 * 
 * 
 * Link to read
 * 
 * https://262.ecma-international.org/5.1/#sec-11.4.3



+++++++++++++++++++++++++ stack and heap memory +++++++++++++++++++++++++++++++++++

// stack(Primitive), Heap(Non-Primitive)
 stack(Primitive): 1. Primitive Datatype jitane bhi h wo sab me stack memory use hota h 
  2. jab bhi stack memory use hoti h means, jo bhi aapne variable declare kiya h uska aapko COPY milega

  Example of stack in which we get the data copy: 
        
let myYoutubeName = "shempytamrakar"
let anothername = myYoutubeName
anothername = "priyanktamrakar"

console.log(myYoutubeName); // shempytamrakar
console.log(anothername); // priyanktamrakar


Heap(Non-Primitive): 1. Non-Primitive Datatype jitane bhi h wo sab me heap memory use hota h 
                    2. jab bhi koi memory heap k ander define hoti h ya koi object ya kuch bhi 
                    heap memory k andr jaati h to waha se apne ko REFERENCE milta h original value ka
                    means jo bhi change karenge wo original value me change karega.

  Example of heap in which we get the data reference: 

  let userOne = {
     email: "user@google.com",
     upi: "user@ybl"
  }

  let userTwo = userOne

  userTwo.email = "shempy@google.com"

  console.log(userOne.email); // shempy@google.com
  console.log(userTwo.email); // shempy@google.com
  because of referencehere changes in original memory.
*/

