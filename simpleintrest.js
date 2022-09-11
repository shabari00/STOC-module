let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let a = parseInt(readLine());
let b = parseInt(readLine());
let c = parseInt(readLine());
let d = c-b;
let n = 4;
let result = a+(n-1)*d;
console.log(result);
document.write(result);
