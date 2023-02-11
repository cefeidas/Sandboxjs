// Declare prompt variables

let attack;
let speed;
let magic;

attack = prompt('Attack');
speed = prompt('Defense');
magic = prompt('Magic');


// Declare action-turn variables

let hero_initial_health_points;
let dragon_initial_health_points;
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

// Define Initial Status

hero_initial_health_points = 5;
console.log('Hero initial health: ' + hero_initial_health_points);

dragon_initial_health_points = 15;
console.log('Dragon initial health: ' + dragon_initial_health_points);

// Define Turn One Actions

if (speed == 3) {
    turn_one_hero_deals_damage = 2* (attack + 1);
} else {
    turn_one_hero_deals_damage = attack + 1;
}

turn_one_dragon_deals_damage = 2

turn_one_hero_health_points = 5 - turn_one_dragon_deals_damage;
turn_one_dragon_health_points = 15 - turn_one_hero_deals_damage;

console.log('Hero Health Points after turn one: ' + turn_one_hero_health_points);
console.log('Dragon Health Points after turn one: ' + turn_one_dragon_health_points);

// Define Turn-Two Actions

if (speed == 3 || speed == 2) {
    turn_two_hero_deals_damage = 2* (attack + 1);
} else {
    turn_two_hero_deals_damage = attack + 1;
}
turn_two_dragon_deals_damage = 2;

turn_two_hero_health_points = turn_one_hero_health_points - turn_two_dragon_deals_damage;
turn_two_dragon_health_points = turn_one_dragon_health_points - turn_two_hero_deals_damage;

console.log('Hero Health Points after turn two: ' + turn_two_hero_health_points);
console.log('Dragon Health Points after turn two: ' + turn_two_dragon_health_points);

// Define Turn-Three Actions

if (speed == 1 || speed == 3) {
    turn_three_hero_attack_damage = 2* (attack + 1);
} else {
    turn_three_hero_attack_damage = attack + 1;
}
if (magic == 1) {
    turn_three_hero_magic_damage = 2;
} else if (magic == 2 || magic == 3 ) {
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

console.log('Hero Health Points after turn three: ' + turn_three_hero_health_points);
console.log('Dragon Health Points after turn three: ' + turn_two_dragon_health_points);

// Define Turn-Four Actions

if (speed == 3 || speed == 2) {
    turn_four_hero_deals_damage = 2* (attack + 1);
} else {
    turn_four_hero_deals_damage = attack + 1;
}

turn_four_dragon_deals_damage = 2

turn_four_hero_health_points = turn_three_hero_health_points - turn_four_dragon_deals_damage;
turn_four_dragon_health_points = turn_three_dragon_health_points - turn_four_hero_deals_damage;

console.log('Hero Health Points after turn four: ' + turn_four_hero_health_points);
console.log('Dragon Health Points after turn four: ' + turn_four_dragon_health_points);

// Define Turn-Five Actions

if (speed == 3)  {
    turn_five_hero_deals_damage = 2* (attack + 1);
} else {
    turn_five_hero_deals_damage = attack + 1;
}

turn_five_dragon_deals_damage = 2

turn_five_hero_health_points = turn_four_hero_health_points - turn_five_dragon_deals_damage;
turn_five_dragon_health_points = turn_four_dragon_health_points - turn_five_hero_deals_damage;

console.log('Hero Health Points after turn five: ' + turn_five_hero_health_points);
console.log('Dragon Health Points after turn five: ' + turn_five_dragon_health_points);