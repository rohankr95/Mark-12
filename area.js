const a = document.querySelector(".first-side")
const b = document.querySelector(".second-side")
const c = document.querySelector(".third-side")

const calculateButton = document.querySelector("#calculate-area");

const outputEl = document.querySelector(".output");


calculateButton.addEventListener("click",calculateArea)


function checkIfTrianglePossible(d,e,f){

    if(d+e>f && e+f>d && d+f>e){

        return true;
    }

    return false;

}




function calculateArea(){
    let checkTriangle = checkIfTrianglePossible(Number(a.value),Number(b.value),Number(c.value));
    if(checkTriangle){
        const s = (Number(a.value) + Number(b.value) + Number(c.value))/2;
        console.log(s);
    }

    
}