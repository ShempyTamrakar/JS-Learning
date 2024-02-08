
// let score ="33"
// console.log(typeof score);//string
// console.log(typeof(score));//string

// let valueInNumber = Number(score) //yaha ye score string ka number me convert hoo gaya h
// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //NaN - not a number

/*  notes
input value     type        o/p of value
    1. "33"     => number   =>    33
    2. "33abc"  => number   =>    NaN    means not a number
    3. ""       => string   =>    
    4. true =>1; false => 0

*/
let isLoggedIn = 1;
let IsStringIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
let IsStringLoggedIn = Boolean(IsStringIn);
// console.log(IsStringLoggedIn);

/*Notes
    1. 1 => true; 0 => false
    2. "" => false 
    3. "shempy" => true
*/

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber); 
// console.log(typeof stringNumber);

/****************Operation*********************** */

let vlaue = 3;
let negValue = -vlaue
// console.log(negValue);
// console.log("addition",2+2);
// console.log("substration",2-2);
// console.log("multiplication",2*2);
// console.log("power",2**3);
// console.log("modulo",2/3);
// console.log("division",2%3);

// let str1 = "hello"
// let str2 = "hitesh"

// let str3 = str1 + str2
// console.log("concation",str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log((3 + 4) * 5 % 3);
// console.log(true); // output will be true only
// console.log(+true); // output will be 1
// // console.log(true+); // it will give the error
// console.log(+""); // output will be 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameConter = 100
gameConter++; 
++gameConter;
console.log(gameConter);
// link to study  1st link for understand the conversion 
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// second link for understand the prefix and postfix
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment 
