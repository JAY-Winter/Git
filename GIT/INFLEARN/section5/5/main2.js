
function solution(K, A){

    let answer = 0;
    let sum =0;
    let n = A.length;

    
    for(let i=0; i<K; i++) sum += A[i];
        answer = sum;
        
    for(let i=K; i<n; i++){
        sum += (A[i]-A[i-K]);
        answer =Math.max(answer,sum);
    }
    return answer;
}

let arr= [12,15,11,20,25,10,20,19,13,15];

console.log(solution(3, arr));