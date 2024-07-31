'use strict';

let player = new Object({ score: 0 });

// Создание объекта gameLevel с level: 1
let gameLevel = new Object({ level: 1 });

console.log(player.score);       // 0
console.log(gameLevel["level"]); // 1