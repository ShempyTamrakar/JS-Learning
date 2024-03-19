// reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc value: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

/* output will be - 
acc value: 0 and currval: 1
acc value: 1 and currval: 2
acc value: 3 and currval: 3
6

*/

//above we have to understand how the value is coming that's why we have console acc and currval to know how 6 is coming
const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
// console.log(myTotal); //6 

const shoppingCard = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'python course',
        price: 999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data scientist course',
        price: 12999
    },
]
//1st condition - shopping cards me jitane prices hai unko add karna hai

const priceToPay = shoppingCard.reduce( (acc, item) => acc + item.price, 0)
console.log(`Total price to pay is: ${priceToPay}`);
//Total price to pay is: 22996