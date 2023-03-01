
addEventListener("load",() => {
    var index = 0;
    const slides = document.querySelectorAll(".slides");
    const classHide = "slides-hidden", count = slides.length;
    nextSlide();
    function nextSlide() {
        slides[(index ++) % count].classList.add(classHide);
        slides[index % count].classList.remove(classHide);
        setTimeout(nextSlide, 700);
    }
});

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

window.addEventListener("load", (event) => {
    alert("For a better experience, please unmute and use a wide screen");
  });