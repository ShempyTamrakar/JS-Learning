//switch case is more compatible then nested ifelse
//syntax is - 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// NOTE: whatever we are checking we have to first see that checking key
//if is in string value we will check by a string or if no. we can check by that 

//shortcut key to copy paste our code is alt+shift+ down arrow
// const month  = 3
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("feburay");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("case is not matched");
//         break;
// }

// in this case output will be the march because month key is 3 as well case value also 3
// but if no case will match then the default console will print as a output.

const month  = "april"
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("feburay");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("case is not matched");
        break;
}// output will be april