let button1 = document.querySelector("#btn");
let button2 = document.querySelector("#btn1");
let section = document.querySelector("#section");

function btnClick(){
    let h2 = button1.nextElementSibling;
    button2.disabled = false;
    if(+h2.textContent == 10){
        button1.setAttribute("disabled", true);
    }else{
        h2.textContent++;
    }
}
function btn1Click(){
    let h2 = button2.previousElementSibling;
    button1.disabled = false;
    if(-h2.textContent == 0){
    }else{
        h2.textContent--;
    }
}

button1.setAttribute("onclick", "btnClick()");
button2.setAttribute("onclick", "btn1Click()");


// section.style.background = "#000";
// Math.random(
let btn = document.querySelector("#btn");
let btn1 = document.querySelector("#btn1");
function RandomColor(){
    let randomNum1 = Math.floor(Math.random() * 255)
    let randomNum2 = Math.floor(Math.random() * 255)
    let randomNum3 = Math.floor(Math.random() * 255)
    return `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
}

btn.addEventListener("click", () => {
    let deg = Math.floor(Math.random() * 180);
    document.body.style.backgroundColor = RandomColor();
    document.body.style.backgroundImage = `linear-gradient(${deg}deg, ${RandomColor} 0%, ${RandomColor} 46%, ${RandomColor} 100%)`;
});

btn1.addEventListener("click", () => {
    let deg = Math.floor(Math.random() * 180);
    document.body.style.backgroundColor = RandomColor();
    document.body.style.backgroundImage = `linear-gradient(${deg}deg, ${RandomColor} 0%, ${RandomColor} 46%, ${RandomColor} 100%)`;
});


