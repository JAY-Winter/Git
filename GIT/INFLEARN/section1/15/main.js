//섹션 1 문제 15번 풀이

let string = "good";

function solution(str){
    let answer;
    let mid = Math.floor(str.length/2);
    // mid 의 번호

    if(str.length%2===1) answer = str.substring(mid, mid+1);
    else answer = str.substring(mid-1,mid+1);
    
    return answer;
}

console.log(solution(string));

