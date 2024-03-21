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