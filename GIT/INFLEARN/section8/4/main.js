let answer = "";
function solution(N){
    
    if(N===0) return;
    else {
        solution(N-1);
        answer += N + " ";
        console.log(answer);
    }
    return answer;
}
solution(3);