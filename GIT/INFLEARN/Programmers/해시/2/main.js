function solution(clothes) {
    var answer = 0;
    
    let cases = new Map(clothes),
        sort = new Map();

    cases.forEach((key,val)=>{

        if(!sort.has(val)) {
            answer++;
            sort.set(key,sort.get(key)+1);
        }
        
        
    })
    
    return answer;
}


let clothes = [
    ["yellowhat", "headgear"], 
    ["bluesunglasses", "eyewear"], 
    ["green_turban", "headgear"]
];

console.log(solution(clothes));

// 같은 value 끼리 더할 순 없다
    // 다른 value 끼리 더해서 
    // answer ++ 
