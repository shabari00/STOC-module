let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let cc = parseInt(readLine());
let cb = parseInt(readLine());
let ic = parseInt(readLine());
let ib = parseInt(readLine());
let cofchoco = (cc*cb);
let cofice = (ic*ib);
let result = (cofchoco + cofice);
console.log(result);