let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let s = 0;
for (let i=0;i<=n;i++)
{
    a=parseInt(readLine());
    b=parseInt(readLine());
  s=a+b;
}
if(s>100){
console.log(True);
}
else
{
console.log(False);
}