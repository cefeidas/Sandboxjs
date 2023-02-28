




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
    for (let element = 0; element < myArray.length; element++ ) {
        if (myArray[element].muted == true) {
            myArray[element].muted = false;
        } else {
            myArray[element].muted = true;
        }}};


let audioFiles = document.querySelectorAll('audio');
let button = document.getElementById("button");

button.addEventListener("click", () => muteOrUnmute(audioFiles));