
//here we create random color
const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]        
    }
    return color;
}

//here we have changBgcolor as well that color we have set in background to display in a specific interval
//and also we have first check is it blank or having some value. 
let invalidId;
const startChangingColor = function() {
if(!invalidId){
   invalidId =  setInterval(ChangeBgColor, 1000);
}

//here we have  set random color in background
function ChangeBgColor() {
    // 1st way to mention and set body style
        // let body = document.querySelector('body')
        // body.style.backgroundColor = randomColor()
    
        //2nd way to mention and set body style
        document.body.style.backgroundColor = randomColor();
        document.querySelector('h1').innerHTML = `color code is ${randomColor()}`
    }
};

// here we will stop the interval which is running as well clean the variable value for more clean code.
const stopChangingColor = function(){
    clearInterval(invalidId);
    invalidId = null;
};


//the below we mention 2 button on that action this color change or stop is perform
document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)