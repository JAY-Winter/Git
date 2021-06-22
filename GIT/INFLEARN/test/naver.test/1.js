
function solution(arr){
    
    let answer =[];
    let map = new Map();
    
    arr.forEach(x=> {
        
        if(map.has(x)){
            map.set(x, map.get(x)+1);
        }
        else{
            map.set(x,1);
        }
    });

    map.forEach((value)=>{
        if(value > 1) answer.push(value);
    });

    if(answer.length === 0) answer.push(-1);
    return answer;
}


let arr = [1,2,3,4,5,6,7,8];
console.log(solution(arr));
