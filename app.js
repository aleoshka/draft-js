'use strict';

let character = {};

Object.defineProperties(character, {
    name: {
        value: "Дасьтин";
        writable: true
    },
    active: {
        value: true,
        writable: true
    },
    health: {
        value: 100,
        writable: true
    },
    speed: {
        value: 10,
        writable: false
    },
    weapon: {
        value: "Бита",
        writable: true
    }
})

console.log(character.name);    // Дастин
console.log(character.active);  // true
console.log(character.health);  // 100
console.log(character.speed);   // 10
console.log(character.weapon);  // Бита

character.health = 99;

console.log(character.health);  // 99

character.speed = 20;

console.log(character.speed);  // 10