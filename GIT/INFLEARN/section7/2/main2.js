function solution(A){

    let answer = A;
    let n = A.length;

    for(let i=0; i<n-1; i++){

        for(let j=0; j<n-1-i; j++){
            if(A[j]>A[j+1]){
                [A[j], A[j+1]] = [A[j+1],A[j]];
            }
        }
    }
    return answer
}

let arr = [13,5,11,7,23,15];

console.log(solution(arr));