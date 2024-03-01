const Useremail = "S@gmail.com"

// if (Useremail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// } // output will be Got user email

// const UserName = ""
// if (UserName) {
//     console.log("Got user name");
// } else {
//     console.log("Don't have user name");
// } // output will be Don't have user name


const UserArray = []
// if (UserArray) {
//     console.log("Got user array");
// } else {
//     console.log("Don't have user array");
// } // output will be Got user array


/* falsy value are - 
false, 0, -0, BigInt, 0n, "", null, undefined, NaN

truthy values are - 
"0", 'false', " ", [], {}, function(){}
*/

//here we check array is empty or not
// if (UserArray.length === 0) {
//     console.log("Array is empty");
// }// array is empty


//here we will check object is empty or not
const UserObj = {}
if (Object.keys(UserObj).length === 0) {
    console.log("Object is empty");
}// Object is empty
/**
 * 
false == 0
output will be -> true

false == ""
output will be -> true

0 == ''
output will be -> true */


