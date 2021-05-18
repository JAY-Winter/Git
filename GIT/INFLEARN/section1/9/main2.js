
// 섹션1 문제 9 재풀이(2)
// 1. 문자열 입력
// 2. (text) -> '#' 로 치환
// 3. 답안 출력

let str = "BANANA";

function solution(str){
    let answer = "";
    for(let x of str){
        if(x === "N") answer += "#";
        else answer += x;
    }
    return answer;
}

console.log(solution(str));