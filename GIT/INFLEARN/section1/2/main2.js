// 섹션1 2번 재풀이


function solution(a,b,c) {
    let max,sum = a+b+c, answer = "YES";
    if(a<b) max = b;
    else max = a;
    if(max<c) max =c;
    
    if(sum-max<=max) answer ="NO";
    return answer;
}

console.log(solution(6,7,11));