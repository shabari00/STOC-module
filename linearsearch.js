let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let quary = parseInt(readLine());
let sequence = parseInt(readLine());
let mark = 0;
for ( let i=1; i<=sequence; i++)
{
    let element = parseInt(readLine());
    if(element == quary)
    {
        mark = 1;
        break;
    }
}
if (mark==1)
{
    console.log("present");
}
else
{
    console.log("not present");
}

