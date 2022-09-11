let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let str = "";
for (let i = 1; i <= n; i++)
{
  for (let j = 1; j <= i; j++)
   {
    str = str+i;
  }
console.log(str); str = "";
}