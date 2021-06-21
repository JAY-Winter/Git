
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


    for(let [key,val] of map){
        if(val>1) answer.push(val);
    }

    return answer;
}


let arr = [1,2,3,3,3,3,4,4];
console.log(solution(arr));
