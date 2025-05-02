import './style.css'
import products from "./productList.json"
import { addProduct } from './product';

let paras = document.querySelectorAll(".para")


// Scroll effect to about section
document.addEventListener("scroll", () => {
    for (let para of paras) {
        // Get the vertical position of the logo relative to the document
        let paraTop = para.offsetTop;

        // Get the height of the logo element
        let paraHeight = para.offsetHeight;

        // Calculate the position of the bottom edge of the viewport
        let windowBottom = window.scrollY + window.innerHeight;

        // Check if any part of the logo is within the visible viewport
        if (windowBottom > paraTop && window.scrollY < paraTop + paraHeight) {
            para.classList.add("visible");
        } else {
            para.classList.remove("visible");
        }
    }
});

// adding data to the product section

addProduct(products)