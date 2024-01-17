const accountId = 144553
let accountEmail = "shempy@.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;
// for test wether const value is going to be change or not
/* accountId = 2
console.log(accountId); getting error not allowed*/
console.log("before changing the value in table");
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
accountEmail = "tamrakar@gmail.com"
accountPassword = "67890"
accountCity = "Gurgaon"
console.log("After changing the value in table");
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])