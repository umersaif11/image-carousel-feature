// index.js
import "./styles.css";

const images = document.querySelectorAll("[data-img-url]");

images.forEach((div) => {
    div.computedStyleMap.backgroundImage = `url(${div.getAttribute('data-img-url')})`;
})
  