let randomNum = parseInt(Math.random() * 100 + 1);

const guessSlot = document.querySelector('.guesses');
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

//sabse pehale check karo game khelne k liye avaialble hai ya nahi
if (playGame) {
    submit.addEventListener('click', (e) => {
       //ye isliye use karte hai ki values kahi na jaaye yahi ruk jaaye warna server par jaati hai ya kahi jaha call kiya ho
         e.preventDefault()

        //ye user input jo dega uski value li hai humne 
        //ye upar bhi direct .value kark mention kar sakte the 
        const guess = parseInt(userInput.value)
        console.log(guess);
        //ye number pass kar diya hai next ko
        validateGuess(guess)
    })
}


validateGuess = (guess) => {
    // here we check the no. wether in between 1-100 or not
    //the is a valid no. or not 
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    }else if(guess < 1){
        alert('Please enter a number more than 1');
    }else if (guess > 100){
        alert('Please enter a number less than 100');
    }else {
        //ye array me push kar diya hai 
        prevGuess.push(guess)

        //yaha check karenge ki game over to nahi ho gaya 
        //last attempt toh nahi tha uska
        if(numGuess === 11){
            //agr game over hua hai toh display karwana hai message bhi
            // or game over bhi karna hai
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)

            //ab yaha check karenge ki guess jo paas kiya wo sahi hai ya nahi
            CheckGuess(guess)

        }
    }
}
CheckGuess = (guess) => {
     // valiadte value k same ha ya alg hai check hoga usk 
     //behalf me message display hoga displayGuess method se 
        if (guess === randomNum) {
            displayMessage(`you guessed right`)
            endGame()
        } else if (guess < randomNum) {
            displayMessage(`Number is tooo low !!!`)
        } else if (guess > randomNum) {
            displayMessage(`Number is tooo high !!!`)
        }
    }
displayGuess = (guess) => {
    //1. it will clean the values taaki same na le sake
        userInput.value = ''
    //2. jitane guess hai unko update karega
        guessSlot.innerHTML += `${guess} , `
        numGuess++;
    //3. jitane remaining hai unko bhi update karega
        remaining.innerHTML = `${11 - numGuess}`
}
displayMessage = (message) => {
   //it will simply display the message
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

endGame = () => {
    //it will end the game
    //value clean kiya pehale
     userInput.value = '';

     //user input me ab or value enter na kar paaye usk liye
     userInput.setAttribute('disabled', '');
    //upar p create kiya tha but kuch rakhaa nahi tha
    //ab yaha rakha hai button heading bhi or usko append bhi kiya hai
     p.classList.add('button');
     p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
     startOver.appendChild(p);
     playGame = false;
     newGame();
 }

newGame = () => {
    //it will start new game
   const newGameButton =  document.querySelector('#newGame');
   newGameButton.addEventListener('click', (e) => {
    randomNum = parseInt(Math.random() * 100 + 1);  
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true
   })
 }
 
 
 