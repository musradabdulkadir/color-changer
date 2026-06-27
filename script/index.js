const para = document.getElementById("para");
const btnRed = document.getElementById("btnRed");
const btnGreen = document.getElementById("btnGreen");
const btnBlue = document.getElementById("btnBlue");
const btnYellow = document.getElementById("btnYellow");
const btnReset = document.getElementById("btnReset");
const container= document.getElementById("container");

btnRed.addEventListener("click", function(){
    container.style.backgroundColor = "red"
    para.style.color = "White"
    para.innerText= "Current Color: Red"
})








