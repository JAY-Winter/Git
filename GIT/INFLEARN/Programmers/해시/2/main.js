
function solution(clothes) {
    
    let answer = 1;
    let N = clothes.length;
    let cases = new Map();
    

    for(let i=0; i<N; i++){
        if(cases.has(clothes[i][1])) cases.set(clothes[i][1], cases.get(clothes[i][1])+1);
        else cases.set(clothes[i][1],1); 
    }

    for(let x of cases.values()){
        answer *= (x+1);
    }
    return answer-1;
}


let clothes = [
    ["yellowhat", "headgear"], 
    ["bluesunglasses", "eyewear"], 
    ["green_turban", "headgear"]
];

console.log(solution(clothes));