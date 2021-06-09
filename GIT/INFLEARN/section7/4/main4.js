function solution(A){

    let answer = A;
    let N = A.length;

    for(let i=0; i<N; i++){

        let tmp = A[i];
        let j;
        for(j=i-1; j>=0; j--){
            if(A[j] > tmp){
                A[j+1] = A[j];
            }else break;
        }
        A[j+1] = tmp;
    }
    return answer;

}


let arr = [11,7,5,6,10,9];

console.log(solution(arr));
