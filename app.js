'use strict';

let str = "Этот метод является регистрозависимым.";

console.log(str.lastIndexOf("р")); // 26
console.log(str.lastIndexOf("Р")); // -1