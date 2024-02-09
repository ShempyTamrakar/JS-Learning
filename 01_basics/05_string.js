 const name ="shempy";
 const repoCount = 50;

//  console.log(name + repoCount + " value"); // but its not a good 
// practise bcoz it is outdated

// console.log(`Hello my name is ${name} and my repo count is 
// ${repoCount}`);  //good practise and it is called string interpolation

const gameName = new String('shempy-hc') //here we create an object
// console.log(gameName[0]); // s
// console.log(gameName.__proto__);  // {}

// console.log(gameName.length); //9
// console.log(gameName.toUpperCase); //[Function: toUpperCase]
// console.log(gameName.toUpperCase()); // SHEMPY-HC
// console.log(gameName.charAt(4)); // p it is define to identify the character
// console.log(gameName.indexOf('m')); //3 it will help to identify the characters index

// const newString = gameName.substring(0,4)
// console.log(newString); // shem here 4th index is missed and as well here no negative values are allowed

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString); //hem it will allowes to use negative values
// //  as well it will work according to that only


const newStringOne = "    shempy     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shempy.com/shempy%20tamrakar"

console.log(url.replace('%20', '-')); //https://shempy.com/shempy-tamrakar

console.log(url.includes('shempy')); //true because this string is available in url
console.log(url.includes('priyank')); //false because this string is not available in url
console.log(gameName.toLowerCase());