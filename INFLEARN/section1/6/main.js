// // 6. 홀수
// // 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수를 모두 골라 합을 구하고
// // 고른 홀수들 중 최소값을 앚는 프로그램을 작성하세요

// // 입력설명
// // 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100 보다 작다.
// // 홀수가 한 개 이상 반드시 존재한다.

// // 출력설명
// // 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최솟값을 출력

// // 입력 예제 1
// // let arr = [12,77,38,41,53,92,85]

// //출력 예제 1
// // 256
// // 41


// // 홀수 찾기

// function solution(arr) {
//     let answer =[];
//     let sum = 0, min = Number.MAX_SAFE_INTEGER;
//     // min 을 최대 값으로 초기화
//     for(let x of arr){
//         if(x%2===1){
//             sum += x;
//             if(x<min) min =x;
//         }
//     }
//     answer.push(sum);
//     answer.push(min);
//     return answer;
// }

let arr = [12,77,38,41,53,92,85];

function solution2(arr) {
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let answer = [];

    for(let x of arr){
        if(x % 2 ===1){
            sum += x;
            if(x < min) min =x;
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}

console.log(solution2(arr));