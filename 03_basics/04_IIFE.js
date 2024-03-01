//Immediately Invoked Function Expression (IIFE)
/**IIFE - 
 * 1. Jo function immediately execute hota hai 
 * 2. global scope k pollution se problem hoti hai kayi baar 
 * to jo global scope k jo variables hai jo bhi declarations hai
 * usk pollution ko  hatane k liye IIFE ka use kiya . 
 * 
 * to declare IIFE 
 * ()() - inside 1st paranthises we write the definition of our code
 *         2nd me execution 
 * and to end this mendatory to use ; semicolon
 * */
// 1st way to use is -

(function invokeFunc() {
    console.log(`DB CONNECTED`);
})();

// 2nd way by using arrow function
(() =>  console.log(`DB CONNECTED IN ARROW FUNC`))();

// 3rd way in which give use some parameter and give some argument as well
((name) =>  console.log(`DB CONNECTED IN ARROW FUNC NAME IS ${name}`))('Shempy');
