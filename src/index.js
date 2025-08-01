// index.js
import "./styles.css";

const images = document.querySelectorAll("[data-img-url]");

images.forEach((div) => {
    div.style.backgroundImage = `url(${div.getAttribute('data-img-url')})`;
});
const slider = document.querySelector(".slider");
const indexButtons = document.querySelectorAll(".index-container > button");
const arrowButtons = document.querySelectorAll("[data-index-change]");
let currIndex = 0;

function slide(nextIndex){
    if(nextIndex < 0) nextIndex = images.length - 1;
    if(nextIndex >= images.length) nextIndex = 0;
    indexButtons[currIndex].style.backgroundColor = "";
    indexButtons[nextIndex].style.backgroundColor = "white";

    //if user click on second button then nextIndex = 1 so
    // transform = translateX(1/3 * 100)% = translateX 33.33% so
    //slider will more 33.33% to left so we've second image
    slider.style.transform = `translateX(-${(nextIndex / images.length) * 100}%)`;
    currIndex = nextIndex;
}

indexButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        slide(index);
    });
});

arrowButtons.forEach(button => {
    button.addEventListener("click", () => {
        const indexChange = +button.getAttribute("data-index-change");
        slide(currIndex + indexChange);
    });
});

const navContainer = document.querySelector(".nav-container");
let id;
let isSliding =  false;

function startAutoSlide() {
    if(!isSliding){
        id = setInterval(() => slide(currIndex + 1), 3000);
        isSliding = true;
    }
}
startAutoSlide();
function stopAutoSlide(){
    clearInterval(id);
    isSliding = false;
}
navContainer.addEventListener("mouseover", () => stopAutoSlide());
navContainer.addEventListener("mouseout", () => startAutoSlide());