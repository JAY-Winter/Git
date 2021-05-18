let str = "ItisTimeToStudy";

function solution(s){
    let answer ="";
    for(let x of s){
        if(x === x.toLowerCase()) answer +=x.toUpperCase();
        else answer += x;
    }
    return answer;
}

console.log(solution(str));