'use strict';

let str = "Привет, Лия!";

console.log(str.indexOf("и", 3)); // 0
console.log(str.indexOf("", 3));    // 8
console.log(str.indexOf("лия"));    // -1
console.log(str.indexOf("!"));      // 11