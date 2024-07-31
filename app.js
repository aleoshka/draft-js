'use strict';

let enemy = {
    name: "Истязатель Разума",
    power: 1000000,
    location: "Изнанка"
};

Object.defineProperty(enemy, "health", {
    value: 9000000,
    writable: true
});

console.log(Object.isExtensible(enemy)); // true

Object.preventExtensions(enemy);

enemy.health = 9990000;

console.log(Object.isExtensible(enemy)); // false
console.log(enemy.health); // 9990000

// TypeError: Cannot define property hive_mind, object is not extensible
Object.defineProperty(enemy, "hive_mind", {
    value: true,
    writable: true
});