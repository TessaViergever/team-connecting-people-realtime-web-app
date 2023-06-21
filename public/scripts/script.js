const ioServer = io();
const dropSeedButton = document.getElementById("drop-seed-button");
const addSunButton = document.getElementById("add-sun-button");
const addWaterButton = document.getElementById("add-water-button");
const addMoreWaterButton = document.getElementById("add-more-water-button");
const boxElement = document.querySelector(".plant-box");
const stemElement = document.querySelector(".stem");
let flowerElement = null;
const logList = document.getElementById("logList");
const nameField = document.getElementById("nameField");
const nameForm = document.getElementById("nameForm");
let userName = "planten verzorger";
const submitNameButton = document.getElementById("submitNameButton");
let counter = 1;

// Functie voor het indienen van de naam
const submitName = (event) => {
  event.preventDefault();

  userName = nameField.value.trim();

  if (userName !== "") {
    ioServer.emit("submit name", userName);
    nameField.disabled = true;
    submitNameButton.disabled = true;
    console.log(`Je naam "${userName}" is verstuurd.`);
  }
};

nameForm.addEventListener("click", submitName);

ioServer.on("user id", (userId) => {
  console.log(`Ontvangen gebruikers-ID: ${userId}`);
});

ioServer.on("step", (step) => {
  let userName = step.userName;
  let stap = step.stap;
  let action = step.action;

  addMessageName(`${userName} geeft ${stap}`);
  if (stap === "zaad") {
    step1();
  }
  if (stap === "zon") {
    step2();
  }
  if (stap === "water") {
    step3();
  }
  if (stap === "meer water") {
    step4();
  }
});

const addMessageName = (message) => {
  const li = document.createElement("li");
  li.textContent = message;
  logList.appendChild(li);
};

const step1 = () => {
  const seed = document.createElement("div");
  seed.className = "seed1";
  boxElement.appendChild(seed);
  dropSeedButton.style.display = "none";
  addSunButton.style.display = "flex";
};

const step2 = () => {
  const sun = document.createElement("div");
  sun.innerHTML = `<div class='sun'><div class='sunrays'></div><div class='circle'></div></div>`;
  boxElement.appendChild(sun);
  addSunButton.style.display = "none";
  addWaterButton.style.display = "flex";
};

const step3 = () => {
  stemElement.classList.add("rain");
  const waterJar = document.createElement("div");
  waterJar.className = "water-jar";
  const water = document.createElement("div");
  water.className = "water";
  boxElement.appendChild(waterJar);
  boxElement.appendChild(water);
  addWaterButton.style.display = "none";
  addMoreWaterButton.style.display = "flex";
};

const step4 = () => {
  const waterJar = document.createElement("div");
  waterJar.className = "water-jar";
  const water = document.createElement("div");
  water.className = "water";
  boxElement.appendChild(waterJar);
  boxElement.appendChild(water);
  stemElement.style.height = "35%";

  if (counter === 1) {
    flowerElement = document.createElement("div");
    flowerElement.className = "flower";
    flowerElement.innerHTML = `<div class='petal petal-1'></div><div class='dot'></div>`;
    boxElement.appendChild(flowerElement);
  } else if (counter >= 2 && counter <= 6) {
    const petal = document.createElement("div");
    petal.className = `petal petal-${counter}`;
    flowerElement.appendChild(petal);
  }

  if (counter === 6) {
    setTimeout(() => {
      const couponCodeElement = document.querySelector(".succes-message");
      if (couponCodeElement) {
        couponCodeElement.style.display = "block";
      }
    }, 1000);
  }

  counter++;
};

document.addEventListener("DOMContentLoaded", () => {
  dropSeedButton.addEventListener("click", () => {
    console.log("Op dropSeedButton geklikt");
    ioServer.emit("step", {
      userName,
      stap: "zaad",
      action: "zaad laten vallen",
    });
  });
  addSunButton.addEventListener("click", () => {
    console.log("Op addSunButton geklikt");
    ioServer.emit("step", {
      userName,
      stap: "zon",
      action: "zon toevoegen",
    });
  });

  addWaterButton.addEventListener("click", () => {
    console.log("Op addWaterButton geklikt");
    ioServer.emit("step", {
      userName,
      stap: "water",
      action: "water toevoegen",
    });
  });

  addMoreWaterButton.addEventListener("click", () => {
    console.log("Op addMoreWaterButton geklikt");
    ioServer.emit("step", {
      userName,
      stap: "meer water",
      action: "extra water toevoegen",
    });
  });
});
