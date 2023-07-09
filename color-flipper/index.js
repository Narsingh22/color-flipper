let btn = document.getElementById("btn");
console.log(btn);
let container = document.getElementById("container");
console.log(container);
let para = document.getElementById("paragraph");
console.log(para);
let count = 1;


function myButton(){
    if (count % 2 == 1){
        container.style.background = "black";
        container.style.border = "5px solid white";
        para.innerText = "button clicked " + count++ + " " + "times";
        para.style.color = "blue";
        btn.style.color = "white";
    }
    else{
        container.style.background = "white";
        container.style.border = "5px solid black";
        para.innerText = "button clicked " + count++ + " " + "times";
        para.style.color = "blue";
        btn.style.color = "black";
    }
}