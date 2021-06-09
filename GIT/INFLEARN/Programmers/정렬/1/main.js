let answer =[];
let stack =[];
const arr = [1,5,2,6,3,7,4];


const slice = [2,5,3];

let i = slice[0];
let j = slice[1];
let k = slice[2];

for(let x=i; x<=j; x++){
    answer.push(arr[x-1])
    answer.sort((a,b)=>a-b);
}
stack.push(answer[k-1]);
console.log(answer);
console.log(stack);