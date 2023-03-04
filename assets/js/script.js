function showSlides(myArray) {
        for (let i=0; i < myArray.length; i++) {
            myArray[i].style.display = 'none';
        }
        slideIndex++;
        if(slideIndex > myArray.length) {
            slideIndex = 1;
        }
        myArray[slideIndex-1].style.display = 'block'
        setTimeout(() => showSlides(myArray), 1000) // Use an arrow function to pass the myArray argument to setTimeout
    } 

let slides = document.querySelectorAll('.slides');
window.addEventListener("load", () => showSlides(Array.from(slides)));


function muteOrUnmute(l) {
    for (let element = 0; element < l.length; element++) {
        if (l[element].muted == true) {
            l[element].muted = false;
        } else {
            l[element].muted = true;
        }}};


let audioFiles = document.querySelectorAll('audio');
let button = document.getElementById("button");

let slideIndex = 0;

button.addEventListener("click", () => muteOrUnmute(audioFiles));
window.addEventListener("load", (event) => {
    alert("For a better experience, please unmute and use a wide screen");
  });