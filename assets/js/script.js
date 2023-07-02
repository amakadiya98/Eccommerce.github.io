const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const menuModal = document.querySelector(".menu-modal");
const menuModalLI = menuModal.querySelectorAll("li");
const menuModalTwo = document.querySelector(".menu-modal-two");
const menuModalTwoLi = menuModalTwo.querySelectorAll("li");
const menuModalTwoButton = menuModalTwo.querySelector("button");
const menuModalThree = document.querySelector(".menu-modal-three");
const menuModalThreeButton = menuModalThree.querySelector("button");

menuButton.addEventListener("click", () => {
    menuButton.classList.add("hide");
    closeButton.classList.remove("hide");
    menuModal.classList.remove("hide");
});

closeButton.addEventListener("click", () => {
    menuButton.classList.remove("hide");
    closeButton.classList.add("hide");
    menuModal.classList.add("hide");
});

menuModalLI.forEach((li) => {
    li.addEventListener("click", () => {
        menuModalTwo.classList.remove("hide");
    });
});

menuModalTwoButton.addEventListener("click", () => {
    menuModalTwo.classList.add("hide");
});

menuModalTwoLi.forEach((li) => {
    li.addEventListener("click", () => {
        menuModalThree.classList.remove("hide");
    });
});

menuModalThreeButton.addEventListener("click", () => {
    menuModalThree.classList.add("hide");
});