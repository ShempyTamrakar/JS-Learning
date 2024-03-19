//while loop
//1st type
// let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

/* output
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/

//2nd type
// let index = 0
// while (index <= 20) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }
/* output if we declare index 0 then it will print even number
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
Value of index is 12
Value of index is 14
Value of index is 16
Value of index is 18
Value of index is 20

*/

//3rd type
// let index = 1
// while (index <= 20) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }
/* output if we declare index 1 then it will print odd number
Value of index is 1
Value of index is 3
Value of index is 5
Value of index is 7
Value of index is 9
Value of index is 11
Value of index is 13
Value of index is 15
Value of index is 17
Value of index is 19
*/

//4th type
// let myArray = ['flash', 'batman', 'superman']
// let arr = 0
// while (arr < myArray.length) {
//     console.log(`Value of array is: ${myArray[arr]}`);
//     arr = arr + 1
// }
/*output will be
Value of array is: flash
Value of array is: batman
Value of array is: superman
  
 */


// do-while loop - it will first run atleast once after that it will check the condition even condition will false it will run once

// let score = 1
// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <=10);

/* output will be - 
Score is 1
Score is 2
Score is 3
Score is 4
Score is 5
Score is 6
Score is 7
Score is 8
Score is 9
Score is 10

*/


let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <=10);

// output is - Score is 11