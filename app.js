'use strict';

let str = "Этот метод является регистрозависимым.";

console.log(str.endsWith("."));     // true
console.log(str.endsWith("!"));     // false
console.log(str.endsWith("д", 10)); // true