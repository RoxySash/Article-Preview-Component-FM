

const shareBtns = document.querySelectorAll(".share-btn");
const shareSectionOne = document.querySelector(".share-section-one");
const shareSectionTwo = document.querySelector(".share-section-two");
//



shareBtns.forEach(btn => {

// add click event listener 
btn.addEventListener("click", () => {
 shareSectionOne.classList.toggle("hidden");
  shareSectionTwo.classList.toggle("hidden");
});
 
});