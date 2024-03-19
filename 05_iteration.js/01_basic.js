// for loop 

// error 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }// it will print an error i.e. 'array is not defined' because we haven't defined the array. 


// execute successfully
/* 1st type - 
for (let index = 0; index < 10; index++)
in this condition it will print 0 to 9

2nd type -
for (let index = 0; index <= 10; index++)
in this condition it will print 0 to 10

3rd type - 
for (let index = 1; index < 10; index++)
in this condition it will print 1 to 9

4th type - 
for (let index = 1; index <= 10; index++)
in this condition it will print 1 to 10
*/
// for (let i = 0; i < 10; i++) {
//         const element = i;
//         console.log(element);
//     } 
    
    // for (let i = 0; i < 10; i++) {
    //     const element = i;
    //     if (element == 5) {
    //         console.log("5 is the best number"); // 1st msg will print and after 
    //     }
    //     console.log(element); // 2nd no. will print
    // } 


// for (let i = 0; i <= 5; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 5; j++) {
//         console.log(`Inner loop value: ${j} and Outer loop value: ${i}`);
        
//     }
// }
/**
 * output
 * 
 * Outer loop value: 0
Inner loop value: 0 and Outer loop value: 0
Inner loop value: 1 and Outer loop value: 0
Inner loop value: 2 and Outer loop value: 0
Inner loop value: 3 and Outer loop value: 0
Inner loop value: 4 and Outer loop value: 0
Inner loop value: 5 and Outer loop value: 0
Outer loop value: 1
Inner loop value: 0 and Outer loop value: 1
Inner loop value: 1 and Outer loop value: 1
Inner loop value: 2 and Outer loop value: 1
Inner loop value: 3 and Outer loop value: 1
Inner loop value: 4 and Outer loop value: 1
Inner loop value: 5 and Outer loop value: 1
Outer loop value: 2
Inner loop value: 0 and Outer loop value: 2
Inner loop value: 1 and Outer loop value: 2
Inner loop value: 2 and Outer loop value: 2
Inner loop value: 3 and Outer loop value: 2
Inner loop value: 4 and Outer loop value: 2
Inner loop value: 5 and Outer loop value: 2
Outer loop value: 3
Inner loop value: 0 and Outer loop value: 3
Inner loop value: 1 and Outer loop value: 3
Inner loop value: 2 and Outer loop value: 3
Inner loop value: 3 and Outer loop value: 3
Inner loop value: 4 and Outer loop value: 3
Inner loop value: 5 and Outer loop value: 3
Outer loop value: 4
Inner loop value: 0 and Outer loop value: 4
Inner loop value: 1 and Outer loop value: 4
Inner loop value: 2 and Outer loop value: 4
Inner loop value: 3 and Outer loop value: 4
Inner loop value: 4 and Outer loop value: 4
Inner loop value: 5 and Outer loop value: 4
Outer loop value: 5
Inner loop value: 0 and Outer loop value: 5
Inner loop value: 1 and Outer loop value: 5
Inner loop value: 2 and Outer loop value: 5
Inner loop value: 3 and Outer loop value: 5
Inner loop value: 4 and Outer loop value: 5
Inner loop value: 5 and Outer loop value: 5
 */

//now if we want to print the table we can do something like this
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + " * " + j + " = " + i*j);
//     }
// }
/** output of table print is
 * Outer loop value: 1
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
1 * 4 = 4
1 * 5 = 5
1 * 6 = 6
1 * 7 = 7
1 * 8 = 8
1 * 9 = 9
1 * 10 = 10
Outer loop value: 2
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20
Outer loop value: 3
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12
3 * 5 = 15
3 * 6 = 18
3 * 7 = 21
3 * 8 = 24
3 * 9 = 27
3 * 10 = 30
Outer loop value: 4
4 * 1 = 4
4 * 2 = 8
4 * 3 = 12
4 * 4 = 16
4 * 5 = 20
4 * 6 = 24
4 * 7 = 28
4 * 8 = 32
4 * 9 = 36
4 * 10 = 40
Outer loop value: 5
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
Outer loop value: 6
6 * 1 = 6
6 * 2 = 12
6 * 3 = 18
6 * 4 = 24
6 * 5 = 30
6 * 6 = 36
6 * 7 = 42
6 * 8 = 48
6 * 9 = 54
6 * 10 = 60
Outer loop value: 7
7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
7 * 6 = 42
7 * 7 = 49
7 * 8 = 56
7 * 9 = 63
7 * 10 = 70
Outer loop value: 8
8 * 1 = 8
8 * 2 = 16
8 * 3 = 24
8 * 4 = 32
8 * 5 = 40
8 * 6 = 48
8 * 7 = 56
8 * 8 = 64
8 * 9 = 72
8 * 10 = 80
Outer loop value: 9
9 * 1 = 9
9 * 2 = 18
9 * 3 = 27
9 * 4 = 36
9 * 5 = 45
9 * 6 = 54
9 * 7 = 63
9 * 8 = 72
9 * 9 = 81
9 * 10 = 90
Outer loop value: 10
10 * 1 = 10
10 * 2 = 20
10 * 3 = 30
10 * 4 = 40
10 * 5 = 50
10 * 6 = 60
10 * 7 = 70
10 * 8 = 80
10 * 9 = 90
10 * 10 = 100
 * 
 * 
 */

//break kisi bhi control flow ko break karne k  liye break use karte hai and continue

// for (let i = 1; i <= 20; i++) {
//  if (i == 5) {
//     console.log("detected 5 no.");
//     break
//  }
//     console.log(`Value of i is: ${i}`);
    
// }

/**output -
 * Value of i is: 1
Value of i is: 2
Value of i is: 3
Value of i is: 4
detected 5 no.
 * 
 */

//NOTE:
//1.shortcut key to copy and duplicate alt+ shift + down arrow key to duplicate the code 
//2. shortcut key to multiple type cntrl+d

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
       console.log("detected 5 no.");
       continue
    }
       console.log(`Value of i is: ${i}`);
       
   }
   /**output will be 5 no is not printed
Value of i is: 1
Value of i is: 2
Value of i is: 3
Value of i is: 4
detected 5 no.
Value of i is: 6
Value of i is: 7
Value of i is: 8
Value of i is: 9
Value of i is: 10
Value of i is: 11
Value of i is: 12
Value of i is: 13
Value of i is: 14
Value of i is: 15
Value of i is: 16
Value of i is: 17
Value of i is: 18
Value of i is: 19
Value of i is: 20
    * 
    * 
    */