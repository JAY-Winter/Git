function solution(A){

    let answer = A;
    

    for(let i=0; i<A.length; i++){

        let tmp = A[i], j;
        for(j=i-1; i>=0; i--){

            if(tmp<A[j]) {
                A[j+1] = A[j];
            }else break;
            console.log(A);
        }
        A[j] =tmp;
    }
    return answer;
}

let arr = [11,7,5,6,10,9];
console.log(solution(arr));