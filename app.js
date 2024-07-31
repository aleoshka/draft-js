'use strict';

let enemy = {
    name: "Векна",
    power: 1000,
    location: "Хоукинс"
};

console.log(Object.isExtensible(enemy));

Object.freeze(enemy);

console.log(Object.isExtensible(enemy));