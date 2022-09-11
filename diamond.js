let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let k = 1;
//forward loop - upper triangle
for(let i = 1; i<=n; i++, k+=2){
    for(let j = i; j<n; j++)
    {
        process.stdout.write(' ');
    }
    for(let j = 1; j<=k; j++)
    {
        process.stdout.write('*');
    }
    console.log();
}
k=k-3;
//lower triangle
for(let i = 1; i<=n; i++, k-=2){
    for(let j = 1; j<=i; j++){
        process.stdout.write(' ');
    }
    for(let j = 1; j<k; j++){
        process.stdout.write('*');
    }
    console.log();
}