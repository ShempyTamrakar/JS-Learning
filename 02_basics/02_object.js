/* 
1. Objects are declared in two ways,
one as literals and the other as constructor.
2. one of the concept is introduced i.e. 
3. Singleton - When we create a singleton from any constructor,
 an object is created, meaning it is an object of its own kind, 
 but when we create it in a different way, 
 it is not a singleton,multiple instances are created.
 Whenever we declare like literals then it is not called singleton.
*/ 
//Object.create - isko constructor k through keh sakte hai 

//object literals
// const NewSym = Symbol('key1');
// const JsUser = {
//     name: "shempy",
//     age: 19,
//     location: "jaipur",
//     email: "shempy@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"],
//     "file name": "Js Learning",
//     [NewSym]: "This is a Symbol syntax how to write" // [Symbol(key1)]: 'This is a Symbol syntax how to write' aise output me aayega agr [] big bracket use karenge to
// }
// //console.log(JsUser); //pura object print hoga isse
// // console.log(JsUser.email); // shempy@google.com

// // agr object me koi data "file name": "Js Learning" aise hai to usko access karne ka ek hi tarika hai 
// // console.log(JsUser["file name"]);

// // agr koi variable symbole hai to ek to usko object me  [NewSym]: "This is a Symbol syntax how to write" mention karna aise hai or dusara 
// //access big bracket se hi hoga jaise -
// // console.log(JsUser[NewSym]); 

// // agr kisi key ki value ovrride karna hai to -
// JsUser.email = "Shempy@chatgpt.com"


// //Object.freeze(JsUser)
// //or agr hum chahte hai ki object me koi changes na ho propogate na kare value to -
// Object.email = "shempy@microsoft.com"
// // console.log(JsUser);
// // print karwane se pta laga ki chatgpt tak to mail aaya but ye microsoft waala override nhi hua kuki usk pehale hi freeze laga diya tha

// JsUser.greeting = function () {
//     console.log(" Hello JS  user ");
// } 

// JsUser.greetingTwo = function () {
//     console.log(`Hello JS  user , ${JsUser.name}`);
// } 

// console.log(JsUser.greeting());

// console.log(JsUser.greetingTwo());

/***********************************  Object part - 2 ****************************** */

//Singleton  object

//const tinderUser = new Object()// ye ek singleton object hai 

const tinderUser = {} // or ye singleton object nahi hai.
tinderUser.id = '123abc'
tinderUser.name = 'same'
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'same', isLoggedIn: false }


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstName: "shempy",
            lastName: "tamrakar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);


const obje1 = {1: "a", 2:"b"}
const obje2 = {3: "c", 4:"d"}
const obje4 = {5: "e", 6:"f"}

// const obj3 = {obje1, obje2} // it will not merge it will give object inside object
// console.log(obj3); //{ obje1: { '1': 'a', '2': 'b' }, obje2: { '3': 'c', '4': 'd' } }


//he target object to copy to.
//Copy the values of all of the enumerable own properties from one or more source objects to a target object. 
//Returns the target object.
// const obj3 = Object.assign({}, obje1, obje2, obje4) // {} - as a target and obje1.... all treat as a source
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


// Mostly used is spread operator to merge the objects
const obj3  = {...obje1, ...obje2, ...obje4}
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//jab bhi database se value aati hai toh array of objects k form me aayegi to usko accesss kaise karenge

const users =[
    {
        id: 1,
        email: 's@gmail.com'
    },
    {
        number: 9867738632,
        city: 'indore'
    },
    {
        state: 'MP',
        country: 'India'
    }
]
//  console.log(tinderUser);
//  console.log(users);

 // to know the objects key name we use like this - 

//  console.log(Object.keys(users[0]));
//  console.log(Object.keys(users[1]));
//  console.log(Object.keys(users[2]));
//  console.log(Object.keys(tinderUser));
/** keys()-Returns the names of the enumerable string properties and methods of an object.
 * Above code output will be the - 
 * [ 'id', 'email' ]
[ 'number', 'city' ]
[ 'state', 'country' ]
[ 'id', 'name', 'isLoggedIn' ]
 * 
 */


 // to know the objects values name we use like this - 

 //  console.log(Object.values(users[0]));
//  console.log(Object.values(users[1]));
//  console.log(Object.values(users[2]));
//  console.log(Object.values(tinderUser));

/** 
 value() - Returns an array of values of the enumerable properties of an object.
 
 * Above code output will be the - 
[ 1, 's@gmail.com' ]
[ 9867738632, 'indore' ]
[ 'MP', 'India' ]
[ '123abc', 'same', false ]
 */


/* by using entries() 
Returns an array of key/values of the enumerable properties of an object
 Object that contains the properties and methods. 
 This can be an object that you created 
 or an existing Document Object Model (DOM) object.
*/
// console.log(Object.entries(users));
/**
 * output will be the -
 *  [
  [ '0', { id: 1, email: 's@gmail.com' } ],
  [ '1', { number: 9867738632, city: 'indore' } ],
  [ '2', { state: 'MP', country: 'India' } ]
]
 */

// console.log(Object.prototype.hasOwnProperty.call(users[0],'email')); //true
// console.log(users.hasOwnProperty('isLoggedIn')); //false

/** hasOwnProperty() = Determines whether an object has a property with the specified name.
 * Above we have mention in 2 ways 
 * 1. first it is in array of an object form
 * 2. second is in normal object for only
 * that's why we have to access throught this way to know that is there keys is available or not.
 * */

//  Objects  De-structuring

const course = {
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "Shempy"
}

//basic way to acccess this objects values is 
// console.log(course.courseInstructor); // Shempy

// but the above way in that we have write course. again and again to access something.
// here another way comes in picture to resolve this - 

//1. first way
// const {courseInstructor: instructor} = course
// console.log(instructor); // Shempy

//2. second way
// const {courseInstructor} = course
// console.log(courseInstructor); // Shempy


/* json - it is simplly javaScript object notation 
json is simply javaScript object notation,
it is not limited to just javaScript,
 it is used in the entire api's industry, 
in any case the data will be found in the api's json format.

*/
// 1. way to get data in the form of an object
// {
//     "name": "shempy",
//     "courseName": "JS in hindi",
//     "price": "free"
// }

//2nd way to get data in the form of an array of an object
// [
//     {...},
//     {...},
//     {....}
// ]

