// 섹션 1 10번 풀이

let str = "COMPUTERPROGRAMMING";

function solution(s){
    let answer = [];
    for(let x of s){
        if(x==="R"){
            answer.push(x);
            answer.length;
        }        

    }
    return answer;
    
}

console.log(solution(str));

function solution2(s, t){
    let answer = 0;
    for(let x of s){
        if(x === t) answer ++;

    }
    return answer;
}
console.log(solution2(str, 'R'));