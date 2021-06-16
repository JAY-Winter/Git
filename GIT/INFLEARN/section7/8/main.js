function solution(A){

    // let answer = A;
    
    let answer =[];
    let count;
    for(let i=0; i<A.length; i++){
        count=1;
        let pos = A[i];
        
        for(let j=1; j<A.length; j++){

            while(pos[1]<=A[j][0]){
                pos=A[j];
                count ++;                
            }
        }
        answer.push(count);

    }
    
    let max = Math.max.apply(null,answer);
    // apply() : answer[] 배열을 풀어서 null 과 비교
    
    return max;
}

let arr = [
    [1,4],
    [2,3],
    [3,5],
    [4,6],
    [5,7]
];

console.log(solution(arr));

// [1,4] : [1,4] -> [4,6]
// [2,3] : [2,3] -> [3,5] -> [5,7]
// [3,5] : [3,5] -> [5,7]
// [4,6] : [4,6]
// [5,7] : [5,7]