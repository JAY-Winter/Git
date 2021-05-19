//섹션 1 문제 14번 풀이

let arr = ['5','teacher','time','student','beautiiful','good'];

function solution(a){
    let answer ="";
    let max = Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        if(x.length > max) {
        max =x.length; 
        answer = x;
    }
        

    }
    return answer;
}

console.log(solution(arr));