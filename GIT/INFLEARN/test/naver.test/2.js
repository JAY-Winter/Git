function Count(A){

    let answer = [];
    let map = new Map();

    A.forEach((x)=> {
        if(map.has(x)) map.set(x, map.get(x)+1);
        else map.set(x,1);
    });
    
    map.forEach((val)=>{
        if(val > 1) answer.push(val);
    });
    
    if(answer.length === 0) answer.push(-1);

    return answer;
}

// let arr = [1,2,3,3,3,3,4,4];
let arr = [1,2,3,4,5];
console.log(Count(arr));