'use strict';

let str = "Этот метод является регистрозависимым.";

console.log(str.startsWith("Этот"));       // true
console.log(str.startsWith("этот"));       // false
console.log(str.startsWith("метод", 5));   // true






