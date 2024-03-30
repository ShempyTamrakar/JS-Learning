
    //1st way 
    // setInterval(function(){
    //     console.log("shempy", Date.now());
    // }, 2000)

    //2nd way 
    // setInterval(function(str){
    //     console.log(str, Date.now());
    // }, 2000, 'hi' )
    

    //here we have use 2nd way as well  SMALL PROJECT - 1 here we are changing text on click as well stopping that text
   
    let invalidId;
    let index = 0;
    const language = ['JS', 'HTML', 'CSS', 'Python', 'Ruby', 'Node']

  const  changeText = () => {
        if (index < language.length) {
                document.querySelector('h1').innerHTML = `A different language like ${language[index]} is a different vision of life. `;        
                index++;
        } else {
            index = 0;    
        }
    }

    const start = document.querySelector('#start').addEventListener('click', function() {
        invalidId = setInterval(changeText, 2000);
        console.log('start');
    })

    const stop = document.querySelector('#stop').addEventListener('click', function() {
        clearInterval(invalidId);
        console.log('stop');

    })
