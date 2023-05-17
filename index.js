const express = require('express');
const app = express();


const map = new Map([
    ['a', 1],
    ['b', 2]
]);
map.set('c', 6)
map.has('c', 6)
map.delete('c', 6)
    // map.clear();
console.log(`${map.has('c', 6)}`)
console.log(`${map.size}`)

for (const [key, value] of map) {
    console.log(`${key}:${value}`);
}

























app.listen(3000, () => {
    console.log('listening on the port 3000');
});