function solution(A){
    
    let answer = [];
    let Count = new Map();

    A.forEach((x)=>{
        Count.set(x, (Count.get(x) || 0) + 1);
    });

    for(let [key,val] of Count){
        if(val > 1) answer.push(val);
    }
    
    if(answer.length === 0) answer.push(-1);
    
    return answer;
}

let arr = [1,2,3,3,3,3,4,4];
let arr2 = [1,2,3,4,5];

console.log(solution(arr));
console.log(solution(arr2));