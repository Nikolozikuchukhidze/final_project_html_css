// let btnElement = document.getElementById("btn-click")
// btnElement.addEventListener("click", function(){
//     alert("you have successfully bought the guitar!")
// })

// Responsive menu
let isOpened = false;
const navBtn = document.querySelector(".navbox_mobile-icon");
const image = navBtn.querySelector("img");
const navbox = document.querySelector(".navbox");

navBtn.addEventListener('click', () => {
    isOpened = !isOpened;

    if(isOpened) {
        image.src = 'photos/close.svg';
        navbox.style.display = 'flex';
    } else {
        image.src = 'photos/menu.svg';
        navbox.style.display = 'none';
    }
});