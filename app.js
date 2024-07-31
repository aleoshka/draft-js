'use strict';

let enemy = {
    name: "Истязатель Разума",
    power: 1000000,
    location: "Изнанка"
};

console.log(Object.isSealed(enemy)); // false

Object.seal(enemy); // Запечатываем объект

console.log(Object.isSealed(enemy)); // true