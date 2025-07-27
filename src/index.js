// index.js
import "./styles.css";

const images = document.querySelectorAll("[data-img-url]");

images.forEach((div) => {
    div.style.backgroundImage = `url(${div.getAttribute('data-img-url')})`;
});
const slider = document.querySelector(".slider");
const indexButtons = document.querySelectorAll(".nav-container > button");
const arrowButtons = document.querySelectorAll("[data-index-change]");
let currIndex = 0;

function slide(nextIndex){
    if(nextIndex < 0) nextIndex = images.length - 1;
    if(nextIndex > images.length - 1) nextIndex = 0;
    
}