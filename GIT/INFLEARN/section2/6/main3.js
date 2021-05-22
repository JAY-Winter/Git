//섹션 2 문제 6번 재풀이(3)

let arr = [
    [10,13,10,12,15],
    [12,39,30,23,11],
    [11,25,50,53,15],
    [19,27,29,37,27],
    [19,13,30,13,19]
];

let answer =Number.MIN_SAFE_INTEGER;
let sum1= sum2 = 0;
let n = arr.length;


function grid_sum(arr){
    
    // 가로, 세로 최대 합 
    for(let i = 0; i < n; i++ ){
        sum1 = sum2 =0;
        for(let j = 0; j < n; j++){
            sum1 += arr[i][j]; // 가로 합
            sum2 += arr[j][i]; // 세로 합
        }
        answer = Math.max(answer,sum1,sum2);
    }
    sum1 = sum2 = 0; // 가로, 세로 최대 합을 구한 다음 sum1,2 초기화

    for(let i = 0; i < n; i++){
        sum1 += arr[i][i];
        sum2 += arr[i][n-i-1];
    }
    answer = Math.max(answer,sum1,sum2);

    return answer;
    

}


console.log(grid_sum(arr));

