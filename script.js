const menuItems = document.getElementById('menu-items');
menuItems.style.maxHeight = '0px';

function menuToggle() {
    if (menuItems.style.maxHeight == '0px') {

        menuItems.style.maxHeight = " 200px"
    } else {
        menuItems.style.maxHeight = " 0px"
    }
};



const productImg = document.getElementById('product-img');
const smallImg = document.querySelectorAll('.small-img');

smallImg[0].onclick = function () {
        productImg.src = smallImg [0].src;
}
smallImg[1].onclick = function () {
    productImg.src = smallImg [1].src;
}
smallImg[2].onclick = function () {
    productImg.src = smallImg [2].src;
}
smallImg[3].onclick = function () {
    productImg.src = smallImg [3].src;
}


// for accout

const loginForm = document.getElementById('loginForm');
const regForm = document.getElementById('registerForm');
const indicator = document.getElementById('indicator');


function register () {
    regForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX (0px)";
}

function login () {
    regForm.style.transform = "translateX(300)";
    loginForm.style.transform = "translateX (300px)";
}
