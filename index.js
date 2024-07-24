let btn = document.querySelector("#button")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")

btn.addEventListener("click",function(){
    let weight = parseInt(document.querySelector("#weight").value)
    let height = parseInt(document.querySelector("#height").value)

    let bmi = (weight / ((height * height)/10000)).toFixed(2)
    console.log(bmi)
    h1.textContent = "You are :"
    h2.textContent =  `BMI = ${bmi}`;

    if(bmi<18.5){
        h1.textContent += "Underweight"
    }
    else if(bmi>=18.5 && bmi<=24.9){
        h1.textContent += "Normal"
    }
    else if(bmi>=25 && bmi<=29.9){
        h1.textContent += "Overweight"
    }
    else if(bmi>30){
        h1.textContent += "Obese"
    }
    else{
        h1.textContent = "You are : "
        h2.textContent = "BMI = ";
    }

})  
