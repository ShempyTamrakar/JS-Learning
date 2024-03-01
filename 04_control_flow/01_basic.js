//1. if statement: basically it is used to check the condition

// if (true) {
//     console.log("agr if ki condition true hai toh hi is block ka code execute hoga")
// }

// if (false) {
//     console.log("agr if ki condition false hai toh hi is block ka code execute hoga")
// }

const isUserLoggedIn = true  // now this value we can evaluate it
// if (isUserLoggedIn) {
//     console.log("executed because condition is true")    
// }//it will print the message

/**
 * before comparing there is some comparation operators are there i.e.
  < less than
  > greater than 
  <= less than or equal to
  >= grater than or equal to
  == double equals to
  != not equal
  === triple equals to it will check value as well as type also
!== if we want to check in a antipattern  ye negative sign check karta hai
 */
// if(2 == "2"){
//     console.log("executed successfully with double equal");
// }// print the message because condition is true bcoz it will not check the type 

// if(2 === "2"){
//     console.log("executed successfully with triple  equal");
// }// it will not print the message because condition is false due to type 

// if(2 != 3){
//     console.log("executed successfully with not equal");
// } // it will print the message because condition is true

const temperatur = 41

// if (temperatur < 50) {
//     console.log("less than 50");
// } // condition is true thats why it will print the message 

// if (temperatur < 50) {
//     console.log("temperatur less than 50");
// }
// console.log("temperatur grater than 50 ");

//output will print both the message but by this we cant see the correct value 

//therefore to identifythe correct and exact message now we use other statement i.e.

//2. if else
// if (temperatur < 50) {
//     console.log("temperatur less than 50");
// }else{
//     console.log("temperatur grater than 50 ");
// }
 //now the message will print either in the if condition msg or else condition msg
//output will be print inside if condition msg

// if (temperatur > 50) {
//     console.log("temperatur less than 50");
// }else{
//     console.log("temperatur grater than 50 ");
// } //now the message will print either in the if condition msg or else condition msg
// //output will be print inside of else condition message

//scope related concept

const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`); //User power: fly run successfully
// }


// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);  // it will give an error that power is not defined 
// //bcoz we have use const and if we either use let the error will be same bcoz its a blocked scope variables.

const balance = 1000

// if (balance > 500 ) console.log("test"); // test 
// // if (balance > 500 ) console.log("test") , console.log("this is not a good practise"); // test his is not a good practise

//3. nested if else condition
// if(balance < 500){
//   console.log("less than 500")
// }else if(balance < 750){
//   console.log("less than 750")
// }else if(balance < 900){
//   console.log("less than 900")
// }else{
//   console.log("less than 1200")
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
// if (userLoggedIn && debitCard) {
//   console.log("allow to buy course because both the condition are true");
// }//it will print the output bcoz both condition is true in AND(&&)

//1. AND(&&) dono condition must be true then only it will give an output
// if (userLoggedIn && debitCard && 2 == 3) {
//   console.log("allow to buy course because both the condition are true");
// }//it will not print the output bcoz both condition is true but another condition is false in AND(&&)

//2. OR(||) 2 me se ek bhi condition true rahegi to it will give the output
// if (loggedInFromGoogle || loggedInFromEmail) {
//   console.log("either user is loggedin with email or with google it will allow to login");
// } // it will print the msg because from both condition one condition is true

//Nullish Coalescing Operator (??): null undefined ye 2 values hai 
let val1;

// val1 = 5 ?? 10 // output is 5
// val1 = null ?? undefined //output is undefined
// val1 = undefined ?? 15 //output is  15
// val1 = null ?? 10 ?? 20 //output is 10

console.log(val1);


//ternary operator (?:)
//syntax condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); 
//output will be more than 80