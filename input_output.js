//javascript
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//----------

 let name = readLine();
 let order = readLine();
console.log("Hello " , name , " !!!");
console.log("Your ordered " , order , ".");