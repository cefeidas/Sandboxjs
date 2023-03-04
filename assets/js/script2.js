function showSlides(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        myArray[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > myArray.length) {
        slideIndex = myArray.length;
    }
    myArray[slideIndex - 1].style.display = 'block';
    if (slideIndex < myArray.length) {
        setTimeout(() => showSlides(myArray), 1000);
    }
}

function muteOrUnmute(audioFiles) {
    for (let i = 0; i < audioFiles.length; i++) {
      audioFiles[i].muted = !audioFiles[i].muted;
    }
  }

  let slideIndex = 0;
  let slides = document.querySelectorAll('.slides');
  let slidesIntro = document.querySelectorAll('.slidesIntro');
  let audioFiles = document.querySelectorAll('audio');
  let button = document.getElementById("button");
  let intro1 = document.getElementById("intro1");
  let intro2 =document.getElementById("intro2");


  window.addEventListener("load", () => showSlides(Array.from(slidesIntro)));
  button.addEventListener("click", () => muteOrUnmute(audioFiles));