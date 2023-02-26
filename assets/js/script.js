




/*
addEventListener("load",() => {
    
    function nextSlide() {
        slides[(index ++) % count].classList.add(classHide);
        slides[index % count].classList.remove(classHide);
        setTimeout(nextSlide, 1000);
        
    }
});
var index = 0;
    const slides = document.querySelectorAll(".introSlides");
    const classHide = "introSlidesHidden", count = slides.length;
    nextSlide();
    */


function muteOrUnmute(myArray) {
    myArray.forEach(element => {
        if (element.muted == true) {
            element.muted = false;
        } else {
            element.muted = true;
        }})};


let audioFiles = document.querySelectorAll('audio');
let button = document.getElementById('button');

button.addEventListener('click',muteOrUnmute('audioFiles'));