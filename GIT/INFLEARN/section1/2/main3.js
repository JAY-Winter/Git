//섹션 1 3번 재풀이(2)

function solution(a,b,c){
    let answer = "YES"
    let sum = a+b+c;
    let max;
    
        if (a<b) max =b;
        else max = a;
        if(c>max) max = c;

        if( (sum - max) <= max) answer ="NO";
        
        return answer;
    
}

console.log(solution(6,7,11));