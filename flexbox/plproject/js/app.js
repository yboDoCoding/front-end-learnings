const burger = document.querySelector('.menu-button');
const items = document.querySelectorAll('li a');
const heading = document.querySelector('h1 a');
const footer_span = document.querySelector('footer p span');
const box = document.querySelectorAll('button div');
const nav = document.querySelector('nav');

let remove = () => {
    box[1].classList.remove('mid-box');
    box[0].classList.remove('top-box');
    box[2].classList.remove('bottom-box');
    burger.classList.remove('transition-button');
    nav.classList.remove('display-block');
}


let change = () => {
    box[1].classList.toggle('mid-box');
    box[0].classList.toggle('top-box');
    box[2].classList.toggle('bottom-box');
    burger.classList.toggle('transition-button');
    nav.classList.toggle('display-block');
};

burger.addEventListener('click', () => change());
items.forEach(element => element.addEventListener('click', () => change()));
heading.addEventListener('click', () => remove());

footer_span.textContent = new Date().getFullYear();