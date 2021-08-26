const angle = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-button");
const output = document.querySelector(".output");


isTriangleBtn.addEventListener("click",isTriangle);

function calcSumOfAngles(angle1,angle2,angle3)
{
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}


function isTriangle(){
   const sumOfAngles = calcSumOfAngles(Number(angle[0].value),Number(angle[1].value),Number(angle[2].value));
   if(sumOfAngles===180){
    output.innerText="yay! the angles form a triangle."
   }
   else{

    output.innerText = "Ohh! No!, the angles do not form a triangle"

   }
}