let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let a1 = parseInt(readLine());
let a2 = parseInt(readLine());
let a3 = parseInt(readLine());
let r = 2;
let a4 = a1*r**3;
console.log(parseInt(a4));