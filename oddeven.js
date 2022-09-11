let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//----------
let evencount = 0;
let oddcount = 0;
let n = parseInt(readLine());
let i;
for(i=1;i<=n;i++)
{
    let num = parseInt(readLine());
    if(num%2 !=0)
        {
            oddcount++;
        }
        else
        {
            evencount++;
        }
}
console.log(oddcount);
console.log(evencount);