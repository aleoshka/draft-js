'use strict';

let enemy = {
    name: "Векна",
    power: 1000,
    location: "Хоукинс"
};

console.log(Object.isFrozen(enemy)); // false

Object.freeze(enemy); // Замораживаем объект

console.log(Object.isFrozen(enemy)); // true