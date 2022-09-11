let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
for (i=0; i<n; i++)
{
num = (readLine());
 num = num.split(" ");
let x = parseInt(num[0]);
let y = parseInt(num[1]);
if (x>0&&y>0)
{
    console.log("q1");
}
else if (x<0&&y>0)
{
    console.log("q2");
}
else if (x<0&&y<0)
{
    console.log("q3");
}
else if (x>0&&y<0)
{
    console.log("q4")
}
}