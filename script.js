//Weight Variables
// const weight = document.querySelector('#weight')
const weightSlider = document.querySelector('#sliderWeight');
const weightOutput = document.querySelector('#inputWeight');

//height variables 
const heightSlider = document.querySelector('#sliderHeight');
const heightOutput = document.querySelector('#inputHeight');


//Calculate Button, BMI Value & Evaluation Messages
let BMIVal = document.querySelector('#yourBMI');
const calculate = document.querySelector('.btn');
const message = document.querySelector('#evaluationMessage');

//Displaying sliders values & update it in real time in input field

//  weightOutput.innerHTML = weightSlider.value;
//  heightOutput.innerHTML = heightSlider.value;
//  weightSlider.addEventListener('input',(e)=>{
//     console.log(e.target.value);
// })

//OR

 weightSlider.addEventListener('input',()=>{
    
    // console.log(weightSlider.value);
    weightOutput.value = weightSlider.value;
    weightOutput.innerHTML = weightSlider.value;

    message.innerHTML = " ";  // clear message before displaying new one after updating the value of slider
})

 heightSlider.addEventListener('input',()=>{
    
    // console.log(weightSlider.value);
    heightOutput.value = heightSlider.value;
    heightOutput.innerHTML = heightSlider.value;

    message.innerHTML = " ";    
})

//Displaying input values & update it in real time in sliders

weightOutput.addEventListener('input', ()=>{
    // console.log(weightOutput.value);
    weightSlider.value = weightOutput.value;
    message.innerHTML = " ";
})

heightOutput.addEventListener('input', ()=>{
    // console.log(weightOutput.value);
    heightSlider.value = heightOutput.value;
    message.innerHTML = " ";
})



//BMI logic

calculate.addEventListener('click', ()=>{
    const weight = parseFloat(weightOutput.value) ;
    const height = parseFloat(heightOutput.value)/100;  //since 100cm =1m  so we divide by 100 to get the value in meters

    const BMI= weight / (height * height); // BMI is weight in kilograms divided by height in meters square.
    
    //BMI value & Messages according to the BMI. 
    if(BMI<19){
        BMIVal.innerHTML =`${BMI.toFixed(1)}  (Underweight)`;      // .toFixed(1) for roundOff
        message.innerText = 'You have to Eat Healthy  and Exercise !!';
    }
    else if(BMI<=25){
        BMIVal.innerHTML =`${BMI.toFixed(1)}  (Healthy Weight)`;
        message.innerText = 'You have Healthy Classic Body Weight for Building Muscles  !!'
    }
    else if(BMI<=35){
        BMIVal.innerHTML =`${BMI.toFixed(1)}  (Overweight)`;
        message.innerText = 'You have to Eat Healthy  and Exercise More !!'
    }
    else {
        BMIVal.innerHTML =`${BMI.toFixed(1)}  (Obesity)`;
        message.innerText = "It's Obesity, You need to Reduce Your Caloric Intake!!";
        }
})
