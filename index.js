const express = require('express');
const app = express();

function plusOne(digits) {
    const n = digits.length;
    for (let i = n - 1; i >= 0; i++) {
        digits[i]++;
        if (digits[i] <= 9) {
            return digits;
        }
        digits[i] = 0;
    }
    const result = [1, ...digits];
    return result;
}

const digits = [1, 2, 3];
const result = plusOne(digits);
console.log(result);





















app.listen(3000, () => {
    console.log('listening on the port 3000');
});