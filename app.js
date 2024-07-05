'use strict';

// let name = "Лия", age = 21, active = true;
// console.log(name, age, active);

// let obj = { name: "Лия", age: 21, active: true };
// let { name: currentName, age: currentAge, active: currentStatus } = obj;

// let arr = [1, 2, 3];
// let [a, b, c] = arr;
// let [a, b, c] = [1, 2, 3];

// let arr = [1, 2, 3, 4, 5];
// let [a, b, ...rest] = arr;

// let a, b, c = 100;
// console.log(a, b, c);

// console.log(typeof user);

// let a = "100";
// a++;
// console.log(a);

// let health = 100;
// let hit = 25;
// health -= hit + 5;

// console.log("Здоровье: " + health);

// let names = ["Макс", "Майк", "Дастин", "Робин"];
// console.log(names);
// delete names[0];
// for (const iterator of names) {
//     console.log(iterator);
// }

// let score = 0, status = 3, result;
// result = (score && status >= 0) ? score : 0;
// console.log(result);

// function increment() {
//     let n = 0;
//     return n += 1, n = 0, 5; // ++n;
// }

// console.log(increment()); // 1

// let result = (1 + 2, 3 + 4);

// let x = "42";
// let y = 42;

// console.log(x += y);

// let x = 5;
// let y = 10;
// let result = x > 3 && y < 15;

// console.log(result); // true

console.log(Boolean(" "));

let x = 5;
x < 4 && console.log("Это никогда не будет напечатано"); // 
x < 6 && console.log("Это будет напечатано");            // Это будет напечатано

let score = 100, bonus = true;
(score -= 100) || (score += 1);
console.log(score);