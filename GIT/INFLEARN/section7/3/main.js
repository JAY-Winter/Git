function solution(A){
    
    let answer = [];
    let n = A.length;
    
    for(let i=0; i<n; i++){
        if(A[i]<0){
            answer.push(A[i]);
            A[i] =0;
            
        }
    }
    for(let x of A){
        if(x>0) answer.push(x);
    }
    return answer;
}

let arr = [1,2,3,-3,-2,5,6,-6];
console.log(solution(arr));

// 음의 정수는 앞쪽에, 양의 정수는 뒷쪽에
// 양의정수와 음의정수 순서에는 변함이 없어야함

// expected output : -3,-2,-6,1,2,3,5,6

// 1. idx < 0 새로운 arr에 Push 한 뒤 delete
// 2. 
