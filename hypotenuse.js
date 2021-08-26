const base= document.querySelector(".base-value");
const height = document.querySelector(".height-value");
const calculateHypotenuseButton = document.querySelector("#calculate-hypotenuse");
const outputEl = document.querySelector(".output");

calculateHypotenuseButton.addEventListener("click",calHypotenuse);

function calHypotenuse(){
    const squareSum = (base.value*base.value) + (height.value*height.value);
    const hypotenuse = Math.sqrt(squareSum);

    outputEl.innerText = "The length of hypotenuse is " + hypotenuse;
}

