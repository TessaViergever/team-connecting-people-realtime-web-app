//SOCKET.OI
let ioServer = io();

let dropSeedButton = document.querySelector(".drop-seed");
let addSunButton = document.querySelector(".add-sun");
let addWaterButton = document.querySelector(".add-water");
let addMoreWaterButton = document.querySelector(".add-more-water");
let boxElement = document.querySelector(".box");
let stemElement = document.querySelector(".stem");
let flowerElement = null; // Will be set dynamically

ioServer.on('step', (step) => {
  console.log(step)
  if (step==1){
    step1()
  }
  if (step==2){
    step2()
  }
  if (step==3){
    step3()
  }
  if (step==4){
    step4()
  }
});

function step1(){
  // Controleer of er op "drop-seed" is geklikt
  let seed = document.createElement("div");
  seed.className = "seed1";
  boxElement.appendChild(seed);
  dropSeedButton.style.display = "none";
  addSunButton.style.display = "flex";
}

function step2(){
 // Controleer of er op "add-sun" is geklikt
  let sun = document.createElement("div");
  sun.innerHTML ="<div class='sun'><div class='sunrays'></div><div class='circle'></div></div>";
  boxElement.appendChild(sun);
  addSunButton.style.display = "none";
  addWaterButton.style.display = "flex";
}

function step3(){
  stemElement.classList.add("rain");
  let waterJar = document.createElement("div");
  waterJar.className = "water-jar";
  let water = document.createElement("div");
  water.className = "water";
  boxElement.appendChild(waterJar);
  boxElement.appendChild(water);
  addWaterButton.style.display = "none";
  addMoreWaterButton.style.display = "flex";
}

function step4(){
  let waterJar = document.createElement("div");
  waterJar.className = "water-jar";
  let water = document.createElement("div");
  water.className = "water";
  boxElement.appendChild(waterJar);
  boxElement.appendChild(water);
  stemElement.style.height = "35%";

  if (counter === 1) {
    flowerElement = document.createElement("div");
    flowerElement.className = "flower";
    flowerElement.innerHTML =
      "<div class='petal petal-1'></div><div class='dot'></div>";
    boxElement.appendChild(flowerElement);
  } else if (counter >= 2 && counter <= 6) {
    let petal = document.createElement("div");
    petal.className = "petal petal-" + counter;
    flowerElement.appendChild(petal);
  }

  if (counter === 6) {
    setTimeout(function () {
      let couponCodeElement = document.querySelector(".plantje-volgroeid");
      if (couponCodeElement) {
        couponCodeElement.style.display = "block";
      }
    }, 1000);
  }

  counter++;
}

//ANIMATION PLANT

document.addEventListener("DOMContentLoaded", function () {

  dropSeedButton.addEventListener("click", function () {
    ioServer.emit('step', 1);
  });
  addSunButton.addEventListener("click", function () {
    ioServer.emit('step', 2);
  });

  addWaterButton.addEventListener("click", function () {
    ioServer.emit('step', 3);
  });

  let counter = 1;

  addMoreWaterButton.addEventListener("click", function () {
    ioServer.emit('step', 4);

    
  });
});

//INFO POP

//spreek de section aan en sla het op als een variable
var modal = document.querySelector('.info-pop');
//spreek de button aan en sla het op als een variable
var btn = document.getElementsByClassName("close")


// als er op kruisje wordt gedrukt dan sluit de modal
function closeModal(){
  modal.style.display = "none"
}
//als de modal open is doet de start knop het niet
// if(document.querySelector(".info-pop").style.display != "none") {
 
//   dropSeedButton.disabled 
// }
