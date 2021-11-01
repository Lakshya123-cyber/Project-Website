// Select element function
const selectElement = function(ele) {
    return document.querySelector(ele);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});