function solution(n){
    let answer ="";

    if(n===0) return;
    else{
        answer+=String(n%2);
        solution(Math.floor(n/2));
    }
    console.log(answer);
    
}

console.log(solution(11));
