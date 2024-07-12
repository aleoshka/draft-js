// let A = new Set([1, 2, 3]);
// let B = new Set(A);
// let C = new Set([4, 5, 6]);
// let D = new Set([...B, ...C]);
// let E = new Set();

// let items = new Set(["камень", "золото", "серебро"]);
// console.log(items.size);

// let items1 = new Set(["камень", "золото", "серебро", "серебро", "золото"]);
// console.log(items1.size);

let A = new Set(["Земля", "Вода", "Огонь"]);
let B = new Set(A);
let C = new Set(["Трава", "Дерево"]);
let D = new Set([...B, ...C]);

console.log([...D].length);