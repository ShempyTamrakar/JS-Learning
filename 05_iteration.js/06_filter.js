// const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach(function (val) {
//         // console.log(val);
//         return val
//     })
//     console.log(values);

//if we store this forEach in a variable and try to perform some condition as well we want to store in a variable 
//then the output will be- undefined    
//NOTE- forEach value return nahi karta hai.

//filter() - Returns the elements of an array that meet the condition specified in a callback function.
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.filter( (num) => num > 4 ) // abhi iska output dekhenge to kuch nahi aayega kuki apn ne bola nahi hai


// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

//but suppose if we open scope (curly bracket) then in that case we must return the value otherwise we dont get output
// const newNums = myNums.filter( (num) => {return num > 4} )
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

//but if we want to write in forEach loop only then to access this we write -
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)    
//     } 
// })

// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]



//more example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //1ST CONDITION - give me that book whose genre is history

  //   let userBooks = books.filter( (bk) => bk.genre === 'History')
//   console.log(userBooks);

  /* output will be - 
        [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]

   */

//2ND CONDITON - give me that book whose published after 2000 including 2000 year

// userBooks = books.filter( (bk) => {bk.publish >= 2000})
// console.log(userBooks); // [] we got this o/p because we have used here scope so we must return the value 


// userBooks = books.filter( (bk) => { return bk.publish >= 2000 } ) 
// console.log(userBooks); 

/* now the output will be - 
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]

*/

//3RD CONDITION - give me that book whose published year is after 1995 as well his genre is history.

userBooks = books.filter( (bk) => 
{ 
    return bk.publish >= 1995 && bk.genre === 'History'
} ) 
console.log(userBooks); 
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/
