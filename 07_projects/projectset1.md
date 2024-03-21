# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript 
// type 1 in this we can change background color on click but we can't reset our background without refeshing
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

// type 2 in this we can change background color on click but as well as reset our background without refeshing

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
let currentColor = '';
buttons.forEach( (button) => {
button.addEventListener('click', (event) => {
    const clickedColor = event.target.id;
    if (currentColor === clickedColor) {
        // Reset background color to white
        body.style.backgroundColor = 'white';
        body.style.color = 'black'; // Reset text color as well
        event.target.style.boxShadow = ''; // Remove box shadow
        currentColor = ''; // Reset current color
    } else {
        switch (clickedColor) {
            case 'grey':
            case 'orange':
            case 'blue':
            case 'red':
                body.style.backgroundColor = clickedColor;
                body.style.color = 'white';
                event.target.style.boxShadow = '5px 5px 5px 8px black';
                currentColor = clickedColor; // Update current color
                break;
            default:
                break;
        }
    }

})
    
})
```

## project 2 solution

```javascript
const form = document.querySelector('form');
/* NOTE: if we declare height and weight before eventListener fun,
then  this usecase will give you empty value.

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
*/

form.addEventListener('submit', (event) => {
    event.preventDefault();
    //jab bhi event se value aayegi to hamesha string me milti hai isliye parseInt use kiya hai
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    
    //parsInt ki need nahi hai kuki ye sirf ek event hai
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter vaild number ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter vaild number ${weight}`
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        //show result 
        
        //using if else nested loop
        // if(bmi < 18.6){
        //     results.innerHTML = `You are Under Weight bmi is: ${bmi}`
        // }else if(bmi <= 24.9 ){
        //     results.innerHTML = `You are in Normal Range bmi is: ${bmi}`
        // }else{
        //     results.innerHTML = `You are Overweight bmi is: ${bmi}`
        // }
        
        //using ternary operator
        let resultsElement = document.querySelector("#results");
        resultsElement.innerHTML = bmi < 18.6 ? `You are Under Weight bmi is: ${bmi}` 
        :bmi <= 24.9 ? `You are in Normal Range between bmi is: ${bmi}` 
        : `You are Overweight bmi is: ${bmi}` ; 

        // Show results box
        resultsElement.style.display = "block";

        // // Clear input fields if we want to clear after click and only msg will display then use this code
        // document.querySelector("#weight").value = "";
        // document.querySelector("#height").value = "";
    }
})

```

## project 3 solution code

```javascript
// 1st way to code to display clock -

// let Hour = document.getElementById('hour')
// let Min = document.getElementById('min')
// let Sec = document.getElementById('sec')

// setInterval(() => {
//     let currentTime = new Date();
//     Hour.innerHTML =  (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//     Min.innerHTML =  (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
//     Sec.innerHTML =  (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
// }, 1000)
// console.log(currentTime.getHours());

//2nd way to display the time
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4 solution


```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```


# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 Solution

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```