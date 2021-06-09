function solution(A){

    let answer = A;
    let N = arr.length;


    for(let i=0; i<N; i++){

        let tmp =A[i], j;
        for(j=i-1; j>=0; j--){
            if(A[j]>tmp){
                A[j+1] = A[j];
            }else break;
            A[j] = tmp;
        }       
    }
    return answer;
}
let arr =[11,7,5,6,10,9];
console.log(solution(arr));


// 삽입 정렬
// 이중 for 문으로 돈다
// i=1 일 때, j=0
// 복제