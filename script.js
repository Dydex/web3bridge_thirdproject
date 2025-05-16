"use script";

const showRules = document.querySelector(".rules");
const sectionOne = document.querySelector(".sectionone");
const sectionTwo = document.querySelector(".sectiontwo");
const closeRules = document.querySelector(".closeimage");
const pickPaper = document.querySelector(".paperimage");
const selectSide = document.querySelector(".selectside");
const emptyDiv = document.querySelector(".emptydiv");
const lastSection = document.querySelector(".last-section");
const computerDiv = document.querySelector(".computer");
const computerText = document.querySelector(".computertext");

showRules.addEventListener("click", function () {
  sectionTwo.classList.remove("hidden");
  sectionOne.classList.add("blurry");
});

closeRules.addEventListener("click", function () {
  sectionTwo.classList.add("hidden");
  sectionOne.classList.remove("blurry");
});

pickPaper.addEventListener("click", function () {
  selectSide.classList.add("hidden");
  lastSection.classList.remove("hidden");

  setTimeout(function () {
    const computer = Math.trunc(Math.random() * 3) + 1;

    emptyDiv.innerHTML = `<img src="images/icon-${computer}.svg" alt="computer pick" />`;
    emptyDiv.style.backgroundColor = "white";
    emptyDiv.style.display = "flex";
    emptyDiv.style.alignItems = "center";
    emptyDiv.style.justifyContent = "center";
    emptyDiv.style.border = " 1rem solid hsl(230, 89%, 62%)";
    emptyDiv.style.width = "70%";
    emptyDiv.style.height = "50%";
    computerDiv.style.marginBottom = "0rem";
    computerDiv.style.gap = "2rem";
    // computerText.style.width = "50%";
  }, 1000);
});
