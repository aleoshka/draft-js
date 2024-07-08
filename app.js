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

// console.log(Boolean(" "));

// let x = 5;
// x < 4 && console.log("Это никогда не будет напечатано"); //
// x < 6 && console.log("Это будет напечатано");            // Это будет напечатано

// let score = 100, bonus = true;
// (score -= 100) || (score += 1);
// console.log(Boolean(undefined) === false);

// let playerName = "Лия Картер";
// console.log(playerName[1]);
// console.log(playerName.charAt(1));
// console.log(playerName.indexOf('и'));

// console.log(playerName.substring(1, 5));
// console.log(playerName.slice(1, 5));

// let num1 = 42;                  // 42
// let num2 = 3.14;                // 3.14
// let num3 = Number(42);          // 42
// let num4 = parseInt('42');      // 42
// let num5 = parseFloat('3.14');  // 3.14
// console.log(1 / 0 === 1 / 0);

// let x = 0 / 0;
// console.log(x == NaN); // false
// console.log(isNaN(x)); // true

// const a = 5.145;
// console.log(a.toFixed(3))

// console.log(typeof null === typeof { a: 'name' });


// let starships = {
//     ["uss_enterprise"]: {
//         name: 'USS Enterprise',
//         shields: true,
//         weapons: true,
//         engine_power: 90
//     },
//     millennium_falcon: {
//         name: 'Millennium Falcon',
//         shields: true,
//         weapons: true,
//         engine_power: 100
//     },
//     prometheus: {
//         name: 'Prometheus',
//         shields: true,
//         weapons: true,
//         engine_power: 70
//     },
// };

// let keys = Object.keys(starships);
// for (const el of keys) {
//     console.log(typeof el);
// }

// const mySymbol = Symbol();
// console.log(typeof mySymbol);

// Создаем символ для представления "скрытого" свойства
// const hiddenProperty = Symbol("hiddenProperty");
// const varia = "Стиль";

// const myObject = {
//     [hiddenProperty]: "Это скрытое свойство",
//     "name": "Алиса",
//     surname: "Битвинкова",
//     varia
// };

// for (const key in myObject) {
//     console.log(myObject[key]);
// }

// // Доступ к "скрытому" свойству
// console.log(myObject[hiddenProperty]);

// let arr7 = new Array(3);
// console.log(arr7[0]);

// let items = ["Меч", "Лук", "Посох"];

// delete items[0];
// console.log(items);
// items[0] = "Гриха";
// console.log(items);
// console.log(items.shift());
// console.log(items);
// items[0] = "Гриха";
// console.log(items);

// let place = { city: "Хоукинс", year: 1984 }; // объект

// delete place['city'];       // Удаляем поле city из объекта place
// console.log(place['city'])
// console.log(place);

// let set1 = new Set();

// // Создание множества с начальными значениями
// let set2 = new Set([1, 2, 3]);

// console.log(set1); // Set(0) {}
// console.log(set2); // Set(3) { 1, 2, 3 }

let set = new Set([1, 2, 2, 3, 3, 3]);
console.log(set);