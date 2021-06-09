function solution(A){

    let answer = A;
    let N = A.length;

    for(let i=0; i<N-1; i++){

        for(let j=0; j<N-1-i; j++){
            
            if(A[j]>0 && A[j+1]<0]){
                [A[j],A[j+1]] = [A[j+1],A[j]];
            }
        }
    }
    return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));