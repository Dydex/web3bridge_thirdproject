"use script";

const showRules = document.querySelector(".rules");
const sectionOne = document.querySelector(".sectionone");
const sectionTwo = document.querySelector(".sectiontwo");
const closeRules = document.querySelector(".closeimage");
const pickPaper = document.querySelector(".paperimage");
const selectSide = document.querySelector(".selectside");

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
});
