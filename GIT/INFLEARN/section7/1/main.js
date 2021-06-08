function solution(A){

    let answer = A;
    let n = A.length;

    for(let i=0; i<n-1; i++){

        let idx=i;
        for(let j=i+1; j<n; j++){
            if(A[j]<A[idx]) idx = j;
        }
        [A[i], A[idx]] = [A[idx], A[i]];
    }

    return answer;
}

let arr = [13,5,11,7,23,15];
console.log(solution(arr)); 


