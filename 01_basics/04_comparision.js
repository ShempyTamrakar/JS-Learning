// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 === 1);

// if we compare 2 different datatype here we have to face some problem as well
// console.log("2" > 1); // output will be true
// console.log("02" > 1); // output will be true
//note:  it will not give the predictable or comparable answer.

// console.log(null > 0); // false
// console.log(null == 0); // false 
// console.log(null >= 0); // true 
// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
 /*NOTE: the reason is that an equality check == and 
comparisons > < >= <= work differently. therefore above type of conversion we should avoid
    
    1. Comparisons convert null to a number, treating it as 0.
    2. thta's why (line no 16) null >= 0 is true 
    and (line no.14) null > 0 is false 
 */


// In JS comparison and equality check this both are different

// strict check means === it will not only check the value but also check the dataType
console.log("2" == 2); //true 
console.log("2" === 2); //false