'use strict';

let enemy = {
    name: "Демогоргон",
    power: 100,
    location: "Хоукинс"
};

enemy.power = 90;
console.log(enemy.power); // 90

Object.freeze(enemy);

enemy.power = 100;
console.log(enemy.power); // 90