const express = require('express');
const app = express();

const obj = {
    name: 'Abu',
    age: 25,
    "key-three": function() {
        console.log(this.name);
    }
}
obj.hobby = 'football',
    console.log(obj.name);
console.log(obj['age'])
console.log(obj['key-three']);
console.log(obj);
obj.sayMyName();


























app.listen(3000, () => {
    console.log('listening on the port 3000');
});