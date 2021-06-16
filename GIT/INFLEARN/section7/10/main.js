function solution(A,M){

    let answer;

    A.sort();

    for(let i=0; i<A.length; i++){
        if(M ===A[i]) answer = i+1;
    }
    return answer;
}


let arr = [23,87,65,12,57,32,99,81];
console.log(solution(arr,32));