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

btnGreen.addEventListener("click", function(){
    container.style.backgroundColor = "green"
    para.style.color = "White"
    para.innerText= "Current Color: Green"
})

btnBlue.addEventListener("click", function(){
    container.style.backgroundColor = "blue"
    para.style.color = "White"
    para.innerText= "Curent Color: Blue"
})

btnYellow.addEventListener("click", function(){
    container.style.backgroundColor = "yellow"
    para.style.color = "Black"
    para.innerText= "Current Color: Yellow"
})

btnReset.addEventListener("click", function(){
    container.style.backgroundColor = "white"
    para.style.color = "Black"
    para.innerText= "Current Color: White"
})






