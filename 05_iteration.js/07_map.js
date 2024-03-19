const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//using map 
// const newNums = myNums.map( (num) => {return num + 10})
// console.log(newNums);
/*output will be
 [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
 */


//using chaining 
const newNums = myNums.map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

/*output will be
[
  41, 51,  61, 71,
  81, 91, 101
]

NOTE: 1. isme 1st map lagaane k baad uski jo value hogi wo next map me aayegi na ki inital value.
2.2nd map me previous map ki value k sath operation perform hoga.
3. filter me 2nd map ki value k according condition access hogi
*/
