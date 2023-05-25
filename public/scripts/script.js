//SOCKET.OI
let ioServer = io();

//ANIMATION PLANT

document.addEventListener("DOMContentLoaded", function () {
  let dropSeedButton = document.querySelector(".drop-seed");
  let addSunButton = document.querySelector(".add-sun");
  let addWaterButton = document.querySelector(".add-water");
  let addMoreWaterButton = document.querySelector(".add-more-water");
  let boxElement = document.querySelector(".box");
  let stemElement = document.querySelector(".stem");
  let flowerElement = null; // Will be set dynamically

  dropSeedButton.addEventListener("click", function () {
    // Controleer of er op "drop-seed" is geklikt
    let seed = document.createElement("div");
    seed.className = "seed1";
    boxElement.appendChild(seed);
    dropSeedButton.style.display = "none";
    addSunButton.style.display = "flex";
  });
  addSunButton.addEventListener("click", function () {
    // Controleer of er op "add-sun" is geklikt
    let sun = document.createElement("div");
    sun.innerHTML =
      "<div class='sun'><div class='sunrays'></div><div class='circle'></div></div>";
    boxElement.appendChild(sun);
    addSunButton.style.display = "none";
    addWaterButton.style.display = "flex";
  });

  addWaterButton.addEventListener("click", function () {
    stemElement.classList.add("rain");
    let waterJar = document.createElement("div");
    waterJar.className = "water-jar";
    let water = document.createElement("div");
    water.className = "water";
    boxElement.appendChild(waterJar);
    boxElement.appendChild(water);
    addWaterButton.style.display = "none";
    addMoreWaterButton.style.display = "flex";
  });

  let counter = 1;

  addMoreWaterButton.addEventListener("click", function () {
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
  });
});
