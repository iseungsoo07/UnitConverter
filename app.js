const inch = document.querySelector(".input__inch input");
const cm = document.querySelector(".input__cm input");
const itoc = document.querySelector(".convert-btn__inchToCm");
const ctoi = document.querySelector(".convert-btn__cmToInch");
const errorMsg = document.querySelector(".error__message");

function clickInchToCm() {
   let inchValue = inch.value;
   if (inchValue === "") {
      errorMsg.innerHTML = "Error: Enter Inch Value";
   } else if (inchValue < 0) {
      errorMsg.innerHTML = "Error: Enter positive Inch Value";
   } else if (isNaN(inchValue)) {
      errorMsg.innerHTML = "Error: Enter Number not String";
   } else {
      cm.value = inchValue * 2.54;
      errorMsg.innerText = "";
   }
}

function clickCmToInch() {
   let cmValue = cm.value;
   if (cmValue === "") {
      errorMsg.innerHTML = "Error: Enter Cm Value";
   } else if (cmValue < 0) {
      errorMsg.innerHTML = "Error: Enter positive Cm Value";
   } else if (isNaN(cmValue)) {
      errorMsg.innerHTML = "Error: Enter Number not String";
   } else {
      inch.value = cmValue / 2.54;
      errorMsg.innerText = "";
   }
}

function init() {
   itoc.addEventListener("click", clickInchToCm);
   ctoi.addEventListener("click", clickCmToInch);
}

init();
