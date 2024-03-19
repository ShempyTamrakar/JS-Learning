// const myObject = {
//     'game1': 'NFS',
//     'game2': 'spiderMan',
//     'game3': 'candyCrush'
//    }
//    for (const [key, value] of myObject) {
//        console.log(key, ':-', value);
//    } // myObject is not iterable it will give an error 
 
//write way to access the object is here we use

//for-in loop
const myObject = { 
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by app"
}
//syntax of for-in is
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for :- ${myObject[key]}`);
// }
/* now the ouput will be -

js shortcut is for :- JavaScript
cpp shortcut is for :- C++
rb shortcut is for :- ruby
swift shortcut is for :- swift by app
*/

const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//      console.log(key);   
//     }
/*NOTE: yaha for-in use kiya toh array ki key  print hui 
but isk pehale for of me key print karne par direct value de deta tha 

output:
0
1
2
3
4

NOTE: but agr for-in me array ki value print karwana hai toh code is- 
*/
// for (const key in programming) {
//     console.log(programming[key]);   
//    }
   /*output is - 
   js
rb
py
java
cpp
   */

//kya hum map me for-in loop laga sakte hai?
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//    console.log(key);
// }

/*NOTE: map actually me iterable nahi hai
toh agr koi chiz iterable nahi hai
toh is tarike se loop me nahi likha jayega 
usko access karne ka tarika alg hai*/

