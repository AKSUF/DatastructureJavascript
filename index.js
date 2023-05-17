const express = require('express');
const app = express();
const set = new Set([1, 2, 3]);
set.add(4);
set.add(4);
set.has(4);

console.log(`${set.delete(3)}`);
console.log(`${set.has(4)}`);
console.log(`${set.size}`);
// console.log(`${set.clear()}`);
for (const item of set) {
    console.log(item);
}

























app.listen(3000, () => {
    console.log('listening on the port 3000');
});