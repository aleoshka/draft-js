// 24.3
// Создаем объект items
let items1 = new Set();

// Добавляем новый элемент "дерево" в объект items
items1.add("дерево");

// Добавляем новые элементы "камень", "золото", "серебро" используя цепочку вызовов.
items1.add("камень").add("золото").add("серебро");

// Выводим объект в консоль
console.log(items1);

// Set(4) { 'дерево', 'камень', 'золото', 'серебро' }

// 24.4
// Создаем объект items
let items2 = new Set();

// Добавляем новые элементы "камень", "золото", "серебро" используя цепочку вызовов.
items2.add("камень").add("золото").add("серебро");

// Удаляем все элементы из объекта items
items2.clear();

// Выводим объект в консоль
console.log(items2);

// Set(0) {}

// 24.5
// Создаем объект items
let items3 = new Set();

// Добавляем новые элементы "камень", "золото", "серебро" используя цепочку вызовов.
items3.add("камень").add("золото").add("серебро");

// Удаляем элементы из объекта items
console.log(items3.delete("камень")); // true
console.log(items3.delete("дерево")); // false

// Выводим объект в консоль
console.log(items3);

// Set(2) { 'золото', 'серебро' }

// 24.6
let items4 = new Set(["камень", "золото", "серебро"]);

console.log(items4.entries());

for (let entry of items4.entries()) {
    console.log(entry);
}

console.clear();

// 24.7
// Определяем набор игровых сущностей
let entities = new Set();

// Добавляем несколько игровых объектов в набор
let player = { id: 1, type: 'player' };
let enemy1 = { id: 2, type: 'enemy' };
let enemy2 = { id: 3, type: 'enemy' };

entities.add(player);
entities.add(enemy1);
entities.add(enemy2);

console.log(entities);

function updatePosition(entity) {
    // ... обновить позицию игровой сущности
    console.log(`Обновленная позиция объекта ${entity.id}`);
}

// Вызов функции updatePosition для каждого игрового объекта.
entities.forEach(updatePosition);

console.clear();

// 24.8
let items5 = new Set(["меч", "щит", "шлем"]);

console.log(items5.has("меч"));   // true
console.log(items5.has("посох")); // false

console.clear();

// 24.9
let items6 = new Set(["меч", "щит", "шлем"]);

console.log(items6.keys()); // [Set Iterator] { 'меч', 'щит', 'шлем' }

// 24.10
let items7 = new Set(["меч", "щит", "шлем"]);

console.log(items7.values()); // [Set Iterator] { 'меч', 'щит', 'шлем' }