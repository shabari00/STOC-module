let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let count = 1;
let n = parseInt(readLine());
let a=parseInt(readLine());
let i;
for (i=1; i<n; i++)
{
    let a1 = parseInt(readLine());
    if (a==a1)
    {
        count++;
    }
    
}
console.log(count);