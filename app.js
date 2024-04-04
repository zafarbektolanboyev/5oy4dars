// let button1 = document.querySelector("#btn");
// let button2 = document.querySelector("#btn1");
// let section = document.querySelector("#section");

// function btnClick(){
//     let h2 = button1.nextElementSibling;
//     button2.disabled = false;
//     if(+h2.textContent == 10){
//         button1.setAttribute("disabled", true);
//     }else{
//         h2.textContent++;
//     }
// }
// function btn1Click(){
//     let h2 = button2.previousElementSibling;
//     button1.disabled = false;
//     if(-h2.textContent == 0){
//     }else{
//         h2.textContent--;
//     }
// }

// button1.setAttribute("onclick", "btnClick()");
// button2.setAttribute("onclick", "btn1Click()");


// // section.style.background = "#000";
// // Math.random(
// function RandomColor(){
//     let randomNum1 = Math.floor(Math.random() * 255)
//     let randomNum2 = Math.floor(Math.random() * 255)
//     let randomNum3 = Math.floor(Math.random() * 255)
//     return `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
// }
// section.style.backgroundColor = RandomColor();
// section.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
// btnClick("backgroundImage");
// btn1Click("backgrounImage");





let lampState = false; // Initially lamp is off

    function toggleLamp() {
        const lamp = document.querySelector('.lamp');
        const lampIcon = document.querySelector('#lampIcon');

        lampState = !lampState; // Toggle the state

        if (lampState) {
            // Lamp is turned on
            lamp.classList.add('on');
            lampIcon.textContent = 'ON';
        } else {
            // Lamp  turned off
            lamp.classList.remove('on');
            lampIcon.textContent = 'OFF';
            
        }
    }

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlh8EezOjh-eua2WfB06brX0ZspKOnDlnRuhDbBYo_hQ&s