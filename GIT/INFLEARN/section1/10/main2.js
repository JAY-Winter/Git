//섹션1 문제 10번 재풀이(2)

// 1. 문자열 입력
// 2. 특정 문자 개수 검색
// 3. 개수 출력

let string = "COMPUTERPROGRAMMING";

function solution(string,S){
    let answer = "";
    for(let x of string){
        if(x===S) answer += x;
    }
    
    return answer.length;
}

console.log(solution(string,'R'));