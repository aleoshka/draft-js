'use strict';

console.log(Math.abs('-1'));     // 1
console.log(Math.abs(-2));       // 2
console.log(Math.abs(null));     // 0
console.log(Math.abs(''));       // 0
console.log(Math.abs([]));       // 0
console.log(Math.abs([2]));      // 2
console.log(Math.abs([1, 2]));    // NaN
console.log(Math.abs({}));       // NaN
console.log(Math.abs('string')); // NaN
console.log(Math.abs());         // NaN