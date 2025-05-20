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
const playAgainBtn = document.querySelector(".playagain");
const userPickImg = document.querySelector(".paperimagetwo");
const computerPickImg = document.querySelector(".emptydiv");
const showScore = document.querySelector(".score");
let score = 0;

showRules.addEventListener("click", function () {
  sectionTwo.classList.remove("hidden");
  sectionOne.classList.add("blurry");
});

closeRules.addEventListener("click", function () {
  sectionTwo.classList.add("hidden");
  sectionOne.classList.remove("blurry");
});

const userChoice = document.querySelectorAll(".user-choice img");
const selectedImage = document.querySelector(".selected-image");

//

userChoice.forEach((choice) => {
  choice.addEventListener("click", function () {
    const imageSrc = this.getAttribute("src");
    selectedImage.setAttribute("src", imageSrc);

    selectSide.classList.add("hidden");
    lastSection.classList.remove("hidden");

    setTimeout(function () {
      const computer = Math.floor(Math.random() * 3) + 1;

      emptyDiv.innerHTML = `<img class='computerimage' src="images/icon-${computer}.svg" alt="computer pick" />`;

      emptyDiv.style.backgroundColor = "white";
      emptyDiv.style.display = "flex";
      emptyDiv.style.alignItems = "center";
      emptyDiv.style.justifyContent = "center";
      emptyDiv.style.border = " 1rem solid hsl(230, 89%, 62%)";
      emptyDiv.style.width = "60%";
      emptyDiv.style.height = "50%";
      computerDiv.style.marginBottom = "0rem";
      computerDiv.style.gap = "2rem";
    }, 1000);

    setTimeout(function () {
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
      } else {
        resultText.innerHTML = "You Lose";
        showScore.innerHTML = score;
      }
    }, 5000);
  });
});
