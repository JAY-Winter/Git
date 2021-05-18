
let str ="KoreaTimeGood";

function solution(s){
    let answer = 0;
    for(let x of s){
        let num = x.charCodeAt();
        if(num >= 65 && num <= 90) answer ++;
    }
    return answer;
}

console.log(solution(str));