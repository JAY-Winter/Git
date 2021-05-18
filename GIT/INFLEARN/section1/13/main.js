// 섹션 1 문제 13번 풀이

let str = "StuDY";

function solution(s){
    let answer = "";
    for(let x of s){
        if(x === x.toLowerCase()) answer += x.toUpperCase();
        else answer += x.toLowerCase();
    }
    return answer;
}

console.log(solution(str));