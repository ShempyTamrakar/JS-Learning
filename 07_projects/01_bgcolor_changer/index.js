const buttons = document.querySelectorAll('.button')
// console.log("buttons",buttons);
const body = document.querySelector('body')
// console.log("body",body);
let currentColor = '';
buttons.forEach( (button) => {
    // console.log("button using forEach",button);
button.addEventListener('click', (event) => {
    // console.log("event",event);
    console.log("event k sath target",event.target.id );

    /*1st way in this we can change the color on one click but 
        we can't reset our background color without refresh
    */
    // switch (event.target.id) {
    //     case 'grey':
    //         body.style.backgroundColor = event.target.id; 
    //         body.style.color = 'white';    
    //         event.target.style.boxShadow = '5px 5px 5px 8px black'; 
    //         break;
    //     case 'orange':
    //         body.style.backgroundColor = event.target.id;
    //         body.style.color = 'white';  
    //         event.target.style.boxShadow = '5px 5px 5px 8px black';    
    //         break;
    //     case 'blue':
    //         body.style.backgroundColor = event.target.id;
    //         body.style.color = 'white'; 
    //         event.target.style.boxShadow = '5px 5px 5px 8px black';    
    //         break;
    //     case 'red':
    //         body.style.backgroundColor = event.target.id;     
    //         body.style.color = 'white';
    //         event.target.style.boxShadow = '5px 5px 5px 8px black'; 
    //         break;

    //     default:
    //         break;
    // }
  
    /* 2nd way here we can change background color on click as well reset the color on again click */
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