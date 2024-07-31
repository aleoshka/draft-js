'use strict';

// Создаем объекты игроков
let player1 = { name: 'Макс', score: 10 };
let player2 = { name: 'Лукас', score: 20 };

let players = Object.assign({ player_i: player1 }, { player1_j: player2 });
console.log(players);
console.log(player1);