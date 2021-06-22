function solution(S){

    let answer;
    let max = Number.MIN_SAFE_INTEGER;

    let map = new Map();

    for(let x of S){
        if(map.has(x)) map.set(x, map.get(x)+1);
        else map.set(x,1);
    }
    
    for(let [key,val] of map){
        
        if(val > max) {    
            max = val;
            answer= key;
        }
        
        
    }
    return answer;



}

let str = "BACBACCACCBDEDE";
console.log(solution(str)); 