// 섹션 1 문제 6번 풀이
// 1. 홀수 찾기
// 1-1. 홀수 합 
// 1-2. 홀수 중 최솟값
// 2. return 
// 3. 출력

let arr = [12, 77, 38, 41, 53, 92, 85];

function solution(arr){
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let answer = [];

    for(let x of arr){
        if(x%2 ===1) {
            sum += x;
            if(x<min) min = x;
        }
    }

    answer.push(sum);
    answer.push(min);

    return answer;
}

console.log(solution(arr));