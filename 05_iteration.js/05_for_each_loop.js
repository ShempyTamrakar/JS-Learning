//for-each loop mostly usingloop

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

/*NOTE: 1. here we can directly access like this for-each loop
        2. when we use forEach loop here it will take a callback fun
        3. when w write a callback func remember that there will be no name of that func  
        4. kuki ye function array k andr chal raha hai toh  ye jo value hogi wo apne aap parameter ki tarah value le k aayega*/

//1st type by using normal function
// coding.forEach(function (val) {
//     console.log(val);
// })

//2nd type by using arrow function
// coding.forEach( (val) => console.log(val))


//3rd type by giving function reference

// function printMe(val) {
//     console.log(val);
// }
// coding.forEach(printMe)

/* then output will be in all the 3type
js
ruby
java
python
cpp 

*/

//now here we will see that inside of forEach loop what how many parameters is there
// coding.forEach((val, index, arr)=>{
// console.log(val, index, arr);
// })

/* output will be -
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

*/

// here we will access array of object by using forEach loop
const myCoding =[
    {
        language: 'javaScript',
        languageFileName: 'js-learning'
    },
    {
        language: 'java',
        languageFileName: 'java-learning'
    },
    {
        language: 'python',
        languageFileName: 'python-learning'
    },
    {
        language: 'C++',
        languageFileName: 'cpp-learning'
    },
    {
        language: 'ruby',
        languageFileName: 'ruby-learning'
    },
]
// myCoding.forEach((val)=>{
//     console.log(val.language);
// })
/* output will be -
javaScript
java
python
C++
ruby
*/

myCoding.forEach((val)=>{
    console.log(val.languageFileName);
})
/* output will be -
js-learning
java-learning
python-learning
cpp-learning
ruby-learning
*/