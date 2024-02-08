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
 */