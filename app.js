// 26.2
let arr1 = new Array("вода", "огонь");
let arr2 = Array("вода", "огонь");
let arr3 = Array(2);

console.log(typeof arr1); // object
console.log(arr1.length); // 2
console.log(arr1);        // ["вода", "огонь"]

console.log(typeof arr2); // object
console.log(arr2.length); // 2
console.log(arr2);        // ["вода", "огонь"]

console.log(typeof arr3); // object
console.log(arr3.length); // 2
console.log(arr3);        // []

// 26.3
let players = ["Майк", "Дастин", "Лукас", "Макс"];
let enemies = [];
let points = [100];
let active = false;
let username = null;
let health = 100;
let name = "Лукас";
let score;

console.log(Array.isArray(players));  // true
console.log(Array.isArray(enemies));  // true
console.log(Array.isArray(points));   // true

console.log(Array.isArray(active));   // false
console.log(Array.isArray(username)); // false
console.log(Array.isArray(health));   // false
console.log(Array.isArray(name));     // false
console.log(Array.isArray(score));    // false

console.clear();

// 26.4
// Определить все ли числа в массиве четные.
let numbers = [2, 4, 6, 8, 10];
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

// Проверка того, все ли элементы в массиве больше определенного значения
const nums = [10, 20, 30, 40, 50];
const allGreater = nums.every(num => num > 5);
console.log(allGreater); // true

// Проверка, удовлетворяют ли все элементы массива нескольким условиям
const arr = [{ name: "Лия", age: 21 }, { name: "Макс", age: 19 }, { name: "Майкл", age: 19 }];
const allMatch = arr.every(person => person.age > 18 && person.name.length > 2);
console.log(allMatch); // true
//
const numbers1 = [1, 2, 3, 4, 5];

const result = numbers1.every((currentValue, index, array) => {
    if (index === 0) {
        return true; // пропускаем первый элемент
    } else {
        return currentValue > array[index - 1];
    }
});

console.log(result); // true

// 26.5
// Объединение двух массивов

let items1 = ["Зелье", "Эликсир"];
let items2 = ["Свиток", "Жезл"];
let allItems = items1.concat(items2);

console.log(allItems); // ["Зелье", "Эликсир", "Свиток", "Жезл"]


// Объединение массива и одного элемента

let items = ["Зелье", "Эликсир"];;
let allItems1 = items.concat("Свиток");

console.log(allItems); // ["Зелье", "Эликсир", "Свиток"]

// 26.6
let playerPositions = [
    { x: 10, y: 20 },
    { x: 20, y: 30 },
    { x: 30, y: 40 }
];

let a = playerPositions.forEach(pos => ({ x: pos.x + 5, y: pos.y + 10 }));

console.log(a);
//
let damages = [10, 20, 30];
let damageMessages = damages.map(damage => `Урон ${damage} очков.`);

console.log(damageMessages);

// 26.7
let items3 = ["Зелье", "Эликсир", "Свиток", "Жезл"];

let hasScroll = items3.includes("Свиток");
let hasAmulet = items3.includes("Амулет");

console.log(hasScroll); // true
console.log(hasAmulet); // false

console.clear();

// 26.8
let enemies1 = [
    { name: "Гоблин", health: 10 },
    { name: "Скелет", health: 20 },
    { name: "Орк", health: 30 }
];

let lowHealthEnemies = enemies1.filter(enemy => enemy.health < 20);
console.log(lowHealthEnemies[0]);