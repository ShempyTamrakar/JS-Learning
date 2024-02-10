const score = 400

const balance = new Number (100)
// console.log(balance); // [Number: 100]
// console.log(score); // 400

// console.log(balance.toString().length); // 3
// console.log(balance.valueOf());
// console.log(balance.toFixed(2)); // 100.00
 
/**
 * //by using precision :
 * Returns a string containing a number represented either 
 * in exponential or fixed-point notation with a specified number of digits. */
const otherNumber1 = 23.896666
// console.log(otherNumber1.toPrecision(3));  // by the no. 23.896666 we
// get the output is 23.9 bcoz we defined 3 in method 

const otherNumber2 = 123.896666
// console.log(otherNumber2.toPrecision(3));  // by the no. 123.896666 we
// get the output is 124 bcoz we defined 3 in method and thatswhy it give round figure value  

const otherNumber3 = 1123.896666
// console.log(otherNumber3.toPrecision(3));  // by the no. 1123.896666 we
// get the output is 1.12e+3 bcoz we defined 3 in method and 
// thatswhy it will give exponentional value 
//NOTE:  here we denfinately know that what value and the priority or dependence is must on each other 

const otherNumber4 = 1123.896666
// console.log(otherNumber4.toPrecision(4));  // by the no. 1123.896666 we
// get the output is 1124 bcoz we defined 4 in method

const hundreds = 10000000
// console.log(hundreds.toLocaleString()); // 10,000,000 this output is according to US-Standard 

const hundreds1 = 10000000
// console.log(hundreds1.toLocaleString('en-IN')); // 1,00,00,000 this output is according to IN-Standard 


//++++++++++++++++++++++++Maths Library in JS ++++++++++++++++++++++++++++++

// console.log(Math);
// /**abs(x: number): number
// A numeric expression for which the absolute value is needed.


// Returns the absolute value of a number 
// (the value without regard to whether 
// it is positive or negative). 
// For example, the absolute value of -5 is the same as the absolute value of 5. */
// console.log(Math.abs(-4)); // means negative value converts into positive

// /**round(x: number): number
// The value to be rounded to the nearest integer.
// Returns a supplied numeric 
// expression rounded to the nearest integer. */
// console.log(Math.round(4.3)); // output is 4 and if we give suppose 4.6 so the output will be 5.

// /**(method) Math.ceil(x: number): number
// Returns the smallest integer greater than or equal to its numeric argument.
// @param x — A numeric expression. */
// console.log(Math.ceil(4.2));// isme 4 se thoda bhi upar point me rahega to bhi 5 o/p dega 
// //but agr aisa nhi chahiye to round ka use kar sakte h

// /**loor(x: number): number
// A numeric expression.


// Returns the greatest integer less than or equal to its numeric argument. */
// console.log(Math.floor(4.9)); // o/p will be 4  so try to use mostly round 

// //Returns the value of a base expression taken to a specified power.
// console.log(Math.pow(3,4)); // 81 it will give the power of 3

// console.log(Math.sqrt(25)); // 5 Returns the square root of a number.

// console.log(Math.PI); //3.141592653589793 This is the ratio of the circumference of a circle to its diameter.

// console.log(Math.min(4,5,8,1,0)); //0 Returns the smaller of a set of supplied numeric expressions.

// console.log(Math.max(4,5,8,1,0)); // 8 Returns the larger of a set of supplied numeric expressions.


/** NOTE: Important method is random()
 * 1. random() hamesha 0 or 1 k andr hi value deti h.
 * 2. ab jab hum isko 10 se multiple karte h to problem ye hoti h ki humne no. ko shift to kar diya left me but 
 * kabhi kabhi ho saktah value aaye 0.1 to yaha Math.floor k andr use karenge to wo value to de dega 0.4 ki 0 par is case ko 
 * avoid karne k liye humne +1 add kar diya kuki apna suppose decide kiya h ki value to minimum 1 se to upar chahiye hi 
 * aage kitana bhi ho sakta h to ye 1 se 9 k bich dega value.
 * 
 * 3. but kabhi kabhi humko define karna hota h min and Max to us case me hum 10 se multiple ki bajaaye
 * max-min+1 karenge to ek to 0 avoid ho gaya or jo range h usk bich hoga but  jaise upar aa raha tha value 
 * to abhi bhi waise hi aa rahi h to min btane k liye ki minimum to itana chahiye usk liye isme +min bhi add 
 * karenge. 
 */

console.log(Math.random()); // it gives random value
console.log(Math.random()*10 +1);
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
