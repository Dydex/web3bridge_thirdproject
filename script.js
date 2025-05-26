"use script";

const closeRules = document.querySelector(".closeimage");

const selectSide = document.querySelector(".selectside");
const emptyDiv = document.querySelector(".emptydiv");
const lastSection = document.querySelector(".last-section");
const computerDiv = document.querySelector(".computer");
const computerText = document.querySelector(".computertext");
const sectionThree = document.querySelector(".sectionthree");
const resultsDiv = document.getElementById("results");

const showRules = document.querySelector(".rules");
const sectionOne = document.querySelector(".sectionone");
const sectionTwo = document.querySelector(".sectiontwo");
const resultText = document.querySelector(".resultstext");

const userPickImg = document.querySelector(".paperimagetwo");
const computerPickImg = document.querySelector(".emptydiv");
const showScore = document.querySelector(".score");

let score = 0;

showRules.addEventListener("click", function () {
  sectionTwo.classList.remove("hidden");
  sectionOne.classList.add("blurry");
  sectionThree.classList.add("blurry");
});

closeRules.addEventListener("click", function () {
  sectionTwo.classList.add("hidden");
  sectionOne.classList.remove("blurry");
  sectionThree.classList.remove("blurry");
});

const userChoice = document.querySelectorAll(".user-choice img");
const selectedImage = document.querySelector(".selected-image");

let computerTimeout;
let resultTimeout;

userChoice.forEach((choice) => {
  choice.addEventListener("click", function () {
    const imageSrc = this.getAttribute("src");
    selectedImage.setAttribute("src", imageSrc);

    selectSide.classList.add("hidden");
    lastSection.classList.remove("hidden");

    // Add Computer Image
    computerTimeout = setTimeout(function () {
      const computer = Math.floor(Math.random() * 3) + 1;

      emptyDiv.innerHTML = `<img class='computerimage' src="images/icon-${computer}.svg" alt="computer pick" />`;

      emptyDiv.style.backgroundColor = "white";
      emptyDiv.style.display = "flex";
      emptyDiv.style.alignItems = "center";
      emptyDiv.style.justifyContent = "center";
      emptyDiv.style.border = " 1.5rem solid hsl(230, 89%, 62%)";
      emptyDiv.style.width = "60%";
      emptyDiv.style.height = "50%";
      computerDiv.style.marginBottom = "0rem";
      computerDiv.style.gap = "2rem";
    }, 2000);

    // Show Win or Lose
    resultTimeout = setTimeout(function () {
      sectionThree.style.width = "80%";
      sectionThree.style.left = "12%";
      userPickImg.style.width = "40%";
      computerPickImg.style.width = "40%";
      resultText.classList.remove("hidden");
      playAgainBtn.classList.remove("hidden");

      // Get the UserImage Src
      const userSrcPath = selectedImage.src;
      const userSrc = userSrcPath.substring(userSrcPath.lastIndexOf("/") + 1);

      // Get the Computer Src
      const computerPick = emptyDiv.querySelector(".computerimage");
      const computerSrcPath = computerPick.src;
      const computerSrc = computerSrcPath.substring(
        computerSrcPath.lastIndexOf("/") + 1
      );

      if (userSrc === computerSrc) {
        resultText.innerHTML = "It's a Draw";
      } else if (
        (userSrc === "icon-3.svg" && computerSrc === "icon-2.svg") ||
        (userSrc === "icon-1.svg" && computerSrc === "icon-3.svg") ||
        (userSrc === "icon-2.svg" && computerSrc === "icon-1.svg")
      ) {
        resultText.innerHTML = "You Win";
        score++;
        showScore.innerHTML = score;
        userPickImg.style.boxShadow =
          "0 0 0 6rem rgba(255, 255, 255, 0.01), 0 0 0 4rem rgba(255, 255, 255, 0.02), 0 0 0 2rem rgba(255, 255, 255, 0.03)";
      } else {
        resultText.innerHTML = "You Lose";
        showScore.innerHTML = score;
        computerPickImg.style.boxShadow =
          "0 0 0 6rem rgba(255, 255, 255, 0.01), 0 0 0 4rem rgba(255, 255, 255, 0.02), 0 0 0 2rem rgba(255, 255, 255, 0.03)";
      }
    }, 5000);
  });
});

// Play again function
const playAgainBtn = document.querySelector(".playagain");
playAgainBtn.addEventListener("click", function () {
  clearTimeout(computerTimeout);
  clearTimeout(resultTimeout);

  lastSection.classList.add("hidden");
  selectSide.classList.remove("hidden");
  selectedImage.setAttribute("src", "");
  resultText.classList.add("hidden");
  playAgainBtn.classList.add("hidden");
  emptyDiv.innerHTML = "";
  emptyDiv.removeAttribute("style");
  computerDiv.removeAttribute("style");
  sectionThree.removeAttribute("style");
  userPickImg.removeAttribute("style");
  computerPickImg.removeAttribute("style");
});
