//array
/**
 * 1.The Array object,
 *  as with arrays in other programming languages, 
 * enables storing a collection of multiple items 
 * under a single variable name, 
 * 
 * 2. JavaScript arrays are resizable 
 * and can contain a mix of different data types. 
 * 
 * 3. JavaScript arrays are not associative arrays and so, 
 array elements cannot be accessed using arbitrary strings as indexes,
 * but must be accessed using nonnegative integers.
 
 4. JavaScript arrays are zero based indexing.

 5.JavaScript array-copy operations create shallow copies.

 6. A shallow copy of an object is a copy 
 whose properties share the same references point.

 7. A deep copy of an object is a copy whose 
 properties do not share the same references
 */
// const myArr = [0, 9, 8, 7, 6, 5]
// const myHeros = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods : 

// myArr.push(6) //push() here push method is used to add the element in the end of the array.
// myArr.push(7) // Appends new elements to the end of an array,
// // and returns the new length of the array.

// myArr.pop() //pop() Removes the last element from an array and returns it. 
// // If the array is empty, undefined is returned 
// // and the array is not modified.

// myArr.unshift(0) //unshift() Inserts new elements at the start of an array,
// and returns the new length of the array.
// myArr.unshift(9)

// myArr.shift() //shift() Removes the first element from an array and returns it. If the array is empty, 
//undefined is returned and the array is not modified.

// console.log(myArr.includes(9));//includes() Determines whether an array includes a certain element,
// returning true or false as appropriate.

// console.log(myArr.indexOf(9)); //indexOf() Returns the index of the first occurrence of a value in an array,
// or -1 if it is not present.

// const newArr = myArr.join() //join() Adds all the elements of an array into a string,
// separated by the specified separator string.

// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); // 0,1,2,3,4,5

// console.log(typeof myArr); // object
// console.log(typeof newArr); // string

// slice(), splice() important method

// console.log("A ", myArr);
/**Returns a copy of a section of an array. 
 * For both start and end, a negative index can be used to indicate an offset from the end of the array.
 *  For example, -2 refers to the second to last element of the array.

param start
The beginning index of the specified portion of the array.
 If start is undefined, then the slice begins at index 0.

param end
The end index of the specified portion of the array.
 This is exclusive of the element at the index 'end'.
 If end is undefined, then the slice extends to the end of the array.
 * 
 * 
 * 
 */
// const myn1 = myArr.slice(1, 3) //1st include hoga 2nd include hoga but 3rd nhi hota h isme
// console.log(myn1); // [ 9, 8 ]
// console.log("B here we have use slice() ", myArr);


/**splice()
 *1. Removes elements from an array and, if necessary, inserts new elements in their place,
  returning the deleted elements.

2. param start — The zero-based location in the array from which to start removing elements.

3. param deleteCount — The number of elements to remove.

4. returns — An array containing the elements that were deleted.
 * 
 */
// const myn2 = myArr.splice(1, 3) 
// console.log("c here we have use splice() ", myArr);
// console.log(myn2); // [ 9, 8, 7 ]


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros) // by printing this we get the output is array inside another array.
// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
 
// now if we want to access flash so we have to write like this:
// console.log(marvel_heros[3][1]); // its not a good practise 


// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//NOTE: in above ex. we saw when we use push () method and concat() which kind of o/p we got.

//type 2nd if we don't push and directly use concat then
// marvel_heros.concat(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman' ]

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//NOTE: push() method returns only existing array only but the concat() method return the new array.

//spread(...)

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3, [4,5, 6],7, [8,9,[6,4]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); 
/** output of real_another_array 
 [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 6,
  4
] */

console.log(Array.isArray("shempy")); //false - because it is not an array
console.log(Array.from("shempy")); //[ 's', 'h', 'e', 'm', 'p', 'y' ]
console.log(Array.from({name:'hitesh'})); // [] it will give an emoty important

let score = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score,score2,score3)); // [ 100, 200, 300 ]
