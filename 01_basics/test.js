// exampe -1 output will be : Cannot access 'name' before initialization
// const firstname = fun();
// let name = 'vivek' 
// function fun(){
//     return `my is ${name} malviya`
//     }
//     console.log(firstname); //Cannot access 'name' before initialization

    // exampe -2 output will be : output with normal function 48

    // function mul(a) { return function (b) {
    //     return function (c) { return a * b * c;
    //     };
    //     };
    //     }
    //     console.log("output with normal function", mul(2)(4)(6));
        
    let ages = [10,20,4,23,67,21,11,9,5,3,24,9,89,60,5,8];
const sumage = ages.reduce((total,age) => total+age, 0);
console.log(sumage); //368