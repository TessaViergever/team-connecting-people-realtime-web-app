let seedButton = document.querySelector(".drop-seed");
console.log(seedButton);

// De eventlistener reageert op een klik op dit element
seedButton.addEventListener("click", function () {
  let addSeed = document.createElement("div"); //Deze regel maakt een nieuw "div"-element aan en slaat het op in de variabele seed.
  console.log(addSeed);
  addSeed.className = "seed1"; //Deze regel voegt de klasse "seed1" toe aan het seed-element.

  let box = document.querySelector(".box");
  box.appendChild(seed); // Deze regel selecteert het element met de klasse "box" en voegt het seed-element toe als een kind van dit element.

  let dropSeed = document.querySelector(".drop-seed");
  dropSeed.classList.add("hidden"); //Deze regel selecteert het element met de klasse "drop-seed" en voegt de klasse "hidden" toe aan de classList van het element.

  let addSun = document.querySelector(".add-sun");
  addSun.classList.add("visible"); //Deze regel selecteert het element met de klasse "add-sun" en voegt de klasse "visible" toe aan de classList van het elemen
});
