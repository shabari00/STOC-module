let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let car = readLine().split(" ");
let N = parseInt(car[0]);
let i = parseInt(car[1]);
if(i>=1 & i<=N)
{
    let j=parseInt((N-i)+1);
    console.log(j);
}
//inputs
//4 2