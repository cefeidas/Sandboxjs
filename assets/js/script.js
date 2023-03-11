function showSlidesLoop(myArray) {
    for (let i=0; i < myArray.length; i++) {
        myArray[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > myArray.length) {
        slideIndex = 1;
    }
    myArray[slideIndex-1].style.display = 'block'
    setTimeout(() => showSlidesLoop(myArray), 2000) 
}

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
      setTimeout(() => showSlides(myArray), 2000);
  }
}

function muteOrUnmute(audioFiles) {
  for (let i = 0; i < audioFiles.length; i++) {
    audioFiles[i].muted = !audioFiles[i].muted;
  }
}

if (window.location.pathname === "/index.html") {
  window.addEventListener('load', () => showSlidesLoop(Array.from(slides)));
  window.addEventListener("load", (event) => {
    alert("For a better experience, please unmute and use a wide screen");
    });
} else if (window.location.pathname === "/introVideo.html") {
  window.addEventListener('load', () => showSlides(Array.from(slidesIntro)));
  }  else if (window.location.pathname === "/battle.html") {
      let damage = form.elements['damage'].value;
      let speed = form.elements['speed'].value;;
      let magic = form.elements['magic'].value;;
      if (damage == 0 && speed == 1 && magic == 3) {
        window.addEventListener('load', () => showSlides(Array.from(battle1)));
      } 
}

function checkFormInputs(event) {
  event.preventDefault();
  let damage = form.elements['damage'].value;
  let speed = form.elements['speed'].value;
  let magic = form.elements['magic'].value;
  if ((parseInt(damage) + parseInt(speed) + parseInt(magic)) > 4) {
    let errorDiv = document.getElementById('errors');
    errorDiv.innerHTML = "<p>Please ensure all your points combined are not greater than 4!</p>";
    errorDiv.style.display = 'block';
  } else if ((parseInt(damage) + parseInt(speed) + parseInt(magic)) < 4) {
    let errorDiv = document.getElementById('errors');
    errorDiv.innerHTML = "<p>Please spend all your available points!</p>";
    errorDiv.style.display = 'block';
  } else if (damage === '3' && speed === '1' && magic === '0'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='310.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '3' && speed === '1' && magic === '0'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='310.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '3' && speed === '0' && magic === '1'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='301.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '2' && speed === '2' && magic === '0'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='220.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '2' && speed === '1' && magic === '1'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='211.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '2' && speed === '0' && magic === '2'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='202.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '1' && speed === '3' && magic === '0'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='130.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '1' && speed === '2' && magic === '1'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='121.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '1' && speed === '1' && magic === '2'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='112.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '1' && speed === '0' && magic === '3'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='103.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '0' && speed === '3' && magic === '1'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='031.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '0' && speed === '2' && magic === '2'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='022.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  } else if (damage === '0' && speed === '1' && magic === '3'){
    let battleStats = document.getElementById('battleStats');
    battleStats.innerHTML = "<a href='310.html'>Let's see how the battle went!</a>";
    battleStats.style.display = 'block';
  }
}

function redirectPage(event) {
  event.preventDefault();
  let damage = form.elements['damage'].value;
  let speed = form.elements['speed'].value;
  let magic = form.elements['magic'].value;
  if (damage === '3' && speed === '1' && magic === '0') {
    window.location.href = '310.html';
  } else {
    console.log('chuminada1');
  }
}
/*
function rulesOfTheGame(event) {
  event.preventDefault();
  let damage = form.elements['damage'].value;
  let speed = form.elements['speed'].value;
  let magic = form.elements['magic'].value;
  if ((parseInt(damage) + parseInt(speed) + parseInt(magic)) > 4) {
    let errorDiv = document.getElementById('errors');
    errorDiv.innerHTML = "<p>Please ensure all your stats combined are not greater than 4 months!</p>";
    errorDiv.style.display = 'block';
  } else if ((parseInt(damage) + parseInt(speed) + parseInt(magic)) < 4) {
    let errorDiv = document.getElementById('errors');
    errorDiv.innerHTML = "<p>Please spend all your available points!</p>";
    errorDiv.style.display = 'block';
  } else {
    // Declare action-turn variables

let hero_initial_health_points = 5;
let dragon_initial_health_points = 15;
let turn_one_hero_deals_damage;
let turn_one_dragon_deals_damage;
let turn_one_hero_health_points;
let turn_one_dragon_health_points;
let turn_two_hero_deals_damage;
let turn_two_dragon_deals_damage;
let turn_two_hero_health_points;
let turn_two_dragon_health_points;
let turn_three_hero_deals_damage;
let turn_three_hero_magic_damage;
let turn_three_hero_attack_damage;
let turn_three_dragon_deals_damage;
let turn_three_hero_healing_spell;
let turn_three_hero_health_points;
let turn_three_dragon_health_points;
let turn_four_hero_deals_damage;
let turn_four_dragon_deals_damage;
let turn_four_hero_health_points;
let turn_four_dragon_health_points;
let turn_five_hero_deals_damage;
let turn_five_dragon_deals_damage;
let turn_five_hero_health_points;
let turn_five_dragon_health_points;

// Define Turn One Actions

if (parseInt(speed) == 3) {
  turn_one_hero_deals_damage = 2* (parseInt(damage) + 1);
} else {
  turn_one_hero_deals_damage = parseInt(damage) + 1;
}

turn_one_dragon_deals_damage = 2

turn_one_hero_health_points = 5 - turn_one_dragon_deals_damage;
turn_one_dragon_health_points = 15 - turn_one_hero_deals_damage;

// Define Turn-Two Actions

if (parseInt(speed) == 3 || parseInt(speed) == 2) {
  turn_two_hero_deals_damage = 2* (parseInt(damage) + 1);
} else {
  turn_two_hero_deals_damage = parseInt(damage) + 1;
}
turn_two_dragon_deals_damage = 2;

turn_two_hero_health_points = turn_one_hero_health_points - turn_two_dragon_deals_damage;
turn_two_dragon_health_points = turn_one_dragon_health_points - turn_two_hero_deals_damage;

// Define Turn-Three Actions

if (parseInt(speed) == 1 || parseInt(speed) == 3) {
  turn_three_hero_attack_damage = 2* (parseInt(damage) + 1);
} else {
  turn_three_hero_attack_damage = parseInt(damage) + 1;
}
if (parseInt(magic) == 1) {
  turn_three_hero_magic_damage = 2;
} else if (parseInt(magic) == 2 || parseInt(magic) == 3 ) {
  turn_three_hero_magic_damage = 4;
} else {
  turn_three_hero_magic_damage = 0;
}
if (magic == 3) {
  turn_three_hero_healing_spell = 4;
} else {
  turn_three_hero_healing_spell = 0;
}
turn_three_hero_deals_damage = turn_three_hero_attack_damage + turn_three_hero_magic_damage;
turn_three_dragon_deals_damage = 2;
turn_three_hero_health_points = turn_two_hero_health_points - turn_three_dragon_deals_damage + turn_three_hero_healing_spell;
turn_three_dragon_health_points = turn_two_dragon_health_points - turn_three_hero_deals_damage;

// Define Turn-Four Actions

if (parseInt(speed) == 3 || parseInt(speed == 2)) {
  turn_four_hero_deals_damage = 2* (attack + 1);
} else {
  turn_four_hero_deals_damage = parseInt(damage) + 1;
}
turn_four_dragon_deals_damage = 2
turn_four_hero_health_points = turn_three_hero_health_points - turn_four_dragon_deals_damage;
turn_four_dragon_health_points = turn_three_dragon_health_points - turn_four_hero_deals_damage;

// Define Turn-Five Actions

if (parseInt(speed) == 3)  {
  turn_five_hero_deals_damage = 2* (parseInt(damage) + 1);
} else {
  turn_five_hero_deals_damage = parseInt(damage) + 1;
}
turn_five_dragon_deals_damage = 2
turn_five_hero_health_points = turn_four_hero_health_points - turn_five_dragon_deals_damage;
turn_five_dragon_health_points = turn_four_dragon_health_points - turn_five_hero_deals_damage;
let battleStats = document.getElementById('battleStats');
battleStats.innerHTML = "The hero initial Health points are: " + hero_initial_health_points + "<br>" +
                        "The dragon initial Health points are: " + dragon_initial_health_points + "<br>" +
                        "In turn one, the Hero deals " + turn_one_hero_deals_damage + " points of damage" +"<br>" +
                        "In turn one, the Dragon deals " + turn_one_dragon_deals_damage + " points of damage" + "<br>" +
                        "At the end of the first turn, the dragon will have " + turn_one_dragon_health_points + " health points" + "<br>" +
                        "At the end of the first turn, the hero will have " + turn_one_hero_health_points + " health points" + "<br>" +
                        "In turn two, the Hero deals " + turn_two_hero_deals_damage + " points of damage" +"<br>" +
                        "In turn two, the Dragon deals " + turn_two_dragon_deals_damage + " points of damage" + "<br>" +
                        "At the end of the second turn, the dragon will have " + turn_two_dragon_health_points + " health points" + "<br>" +
                        "At the end of the second turn, the hero will have " + turn_two_hero_health_points + " health points" + "<br>" +
                        "In turn three, the Hero deals " + turn_three_hero_deals_damage + " points of damage" +"<br>" +
                        "In turn three, the Dragon deals " + turn_three_dragon_deals_damage + " points of damage" + "<br>" +
                        "At the end of the third turn, the dragon will have " + turn_three_dragon_health_points + " health points" + "<br>" +
                        "At the end of the third turn, the hero will have " + turn_three_hero_health_points + " health points" + "<br>" +
                        "In turn four, the Hero deals " + turn_four_hero_deals_damage + " points of damage" +"<br>" +
                        "In turn four, the Dragon deals " + turn_four_dragon_deals_damage + " points of damage" + "<br>" +
                        "At the end of the fourth turn, the dragon will have " + turn_four_dragon_health_points + " health points" + "<br>" +
                        "At the end of the fourth turn, the hero will have " + turn_four_hero_health_points + " health points" + "<br>" +
                        "In turn five, the Hero deals " + turn_five_hero_deals_damage + " points of damage" +"<br>" +
                        "In turn five, the Dragon deals " + turn_five_dragon_deals_damage + " points of damage" + "<br>" +
                        "At the end of the fifth turn, the dragon will have " + turn_five_dragon_health_points + " health points" + "<br>" +
                        "At the end of the fifth turn, the hero will have " + turn_five_hero_health_points + " health points" + "<br>";

battleStats.style.display = 'block';
  }

}
*/
let slideIndex = 0;
let battle1 = document.querySelectorAll('.battle1');
let slides = document.querySelectorAll('.slides');
let slidesIntro = document.querySelectorAll('.slidesIntro');
let audioFiles = document.querySelectorAll('audio');
let button = document.getElementById("button");
let intro1 = document.getElementById("intro1");
let intro2 =document.getElementById("intro2");
let form = document.getElementById("statsForm");




window.addEventListener("load", () => showSlidesLoop(Array.from(slides)));
button.addEventListener("click", () => muteOrUnmute(audioFiles));
form.addEventListener('submit', checkFormInputs);