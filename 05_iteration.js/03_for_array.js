// generally this all loops are used to access the array as well other too

//1. for-of loop

//index is -
// for (const iterator of object) {
    
// }

//1st type
let arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}
/*
1
2
3
4
5
 */

//2nd type-
// const greeting = "hello World !"
// for (const greet of greeting) {
//     // console.log(`Each char is ${greet}`);
// }
/*
Each char is h
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is W
Each char is o
Each char is r
Each char is l
Each char is d
Each char is  
Each char is !
*/

//3rd type- if i have to find the space and stop there condition 
// const greeting = "hello World !"
// for (const greet of greeting) {
//     if (greet === " ") {
//         console.log("space is found");
//         break;
//     }
//     console.log(`Each char is ${greet}`);
// }
/* output when space is found it will stop
Each char is h
Each char is e
Each char is l
Each char is l
Each char is o
space is found
 */

//4th type- if i want to remove the space then
// const greeting = "hello World !"
// const greetingWithoutSpace = greeting.replace(/\s/g, "")

// for (const greet of greetingWithoutSpace) {
//     console.log(`Each char is ${greet}`);
// }
/* output without space
Each char is h
Each char is e
Each char is l
Each char is l
Each char is o
Each char is W
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !

*/

/*Maps - 
1. The Map object holds key-value pairs and remembers the original insertion order of the keys.
    Any value (both objects and primitive values) may be used as either a key or a value.

2.Map objects are collections of key-value pairs.
A key in the Map may only occur once; 
it is unique in the Map's collection.
A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.
*/

//1st type
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);


/* output will be - 
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

//2nd type when we use a loop for access
// for (const key of map) {
//     console.log(key);
// }
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

//but if we dont want this kind of output then

//3rd type
//here we do array destructing
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }
/*
IN :- India
USA :- United States of America
Fr :- France

*/

// const myObject = {
//  'game1': 'NFS',
//  'game2': 'spiderMan',
//  'game3': 'candyCrush'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } // myObject is not iterable it will give an error 