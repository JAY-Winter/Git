// 섹션1 문제 1번 재풀이(2)

function solution(a,b,c){
    let answer;
    if(a<b) answer = a;
    else answer = b;
    if(c<answer) answer = c;
    
    return answer;
}

console.log(solution(6,5,11));