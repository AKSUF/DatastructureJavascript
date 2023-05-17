const express = require('express');
const app = express();
const arr = [1, 2, 3, 4, 'Abu']
arr.push(5);
console.log(arr);
arr.unshift(0); //to add variable at the begining
console.log(arr);
arr.pop(); //to remove last element in arry
console.log(`${arr} pop`);
arr.shift(); //to remove first element in array
console.log(`${arr} shift`);
for (const item of arr) {
    console.log(`${arr} loop`);
}



























app.listen(3000, () => {
    console.log('listening on the port 3000');
});