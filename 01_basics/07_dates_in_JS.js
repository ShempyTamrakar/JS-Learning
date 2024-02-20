//Dates

let myDate = new Date()
// console.log(myDate); //2024-02-10T09:50:53.516Z 

// console.log(myDate.toString()); // if we convert it into toString 
//o/p will be Sat Feb 10 2024 09:52:19 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString());
//o/p will be Sat Feb 10 2024 if we use toDateString() method

// console.log(myDate.toISOString());
//o/p will be 2024-02-10T09:54:51.128Z if we use toISOString() method

// console.log(myDate.toJSON());
//o/p will be 2024-02-10T09:55:39.709Z if we use toJSON() method


// console.log(myDate.toLocaleDateString());
//o/p will be 2/10/2024 if we use toLocaleDateString() method


// console.log(myDate.toLocaleString());
//o/p will be 2/10/2024, 9:57:32 AM if we use toLocaleString() method

/**Note interview question sometime they ask the type od this also */
// console.log(typeof myDate); // object

//in JS month always start from 0 thats why i have mention 0 here
//here some type to define date as well time 
// let myCreatedDate = new Date(2023, 0, 24)
// let myCreatedDate = new Date(2023, 0, 24, 15,3)
// let myCreatedDate = new Date("2023-01-14") //yy-mm-dd format when we want this kind of format so remember that here month started from 1 
// console.log(myCreatedDate.toDateString())
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // here by this we got the milisecond value
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// let UsingInterpolation = `By using interpolation we print ${newDate.getDay()} and the time is ${newDate.getTime()}`
// console.log(UsingInterpolation);

let newType = newDate.toLocaleString('default', {
    weekday: "long",
    dayPeriod:"short"
})
// console.log(newType);

// const d3 = Date('Thu, 01 Jan 1970 00:00:00 GMT')
// console.log(d3) // still it will print the current date time day month yr 


// let myCreatedDate = new Date("01-14-2023T00:00")
// console.log(myCreatedDate); // output will be - Invalid Date

// const date = new Date('2020-01-01T00:00')
// console.log(date.toLocaleDateString('en-IN',
//  { timeZone: 'UTC', timeZoneName: 'short' })); // if we use toLocaleDateString method we get o/p - 1/1/2020, UTC


// const date = new Date('2020-01-01T00:00')
// console.log(date.toLocaleString('en-US',
// { timeZone: 'UTC', timeZoneName: 'short' })); // if we use toLocaleString method we get o/p - 1/1/2020, 12:00:00 AM UTC
 

// const date = new Date('2020-01-01T00:00')
// console.log(date.toLocaleTimeString('en-US',
// { timeZone: 'UTC', timeZoneName: 'short' })); // if we use toLocaleTimeString method we get o/p - 12:00:00 AM UTC


// const date = new Date(2020)
// console.log(date.getFullYear()) // 1970


// const date = new Date(Date.UTC(2020,0,1))
// console.log(date.getUTCFullYear(), date.getFullYear()) // 2020 2020


