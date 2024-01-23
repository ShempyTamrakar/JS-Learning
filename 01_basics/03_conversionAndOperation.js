
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
console.log(booleanIsLoggedIn);
let IsStringLoggedIn = Boolean(IsStringIn);
console.log(IsStringLoggedIn);

/*Notes
    1. 1 => true; 0 => false
    2. "" => false 
    3. "shempy" => true
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); 
console.log(typeof stringNumber);