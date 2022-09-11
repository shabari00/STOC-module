let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let sum=0;
for (let i=1;i<=n;i++)
{
    let num1=parseInt(readLine());
    if (num1>0)
    {
        sum = sum+num1;
    }
}
console.log(sum);
//inputs
/*5
-10
20
30
40
50
*/