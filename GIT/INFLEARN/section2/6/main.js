//섹션 2 문제 6번 풀이






function MaxNum(arr){
    let n = arr.length;
    let answer = Number.MIN_SAFE_INTEGER;
    let sum1 = sum2 = 0;
    // sum1 = 가로 합
    // sum2 = 세로 합
    // answer 최솟값으로 초기화

    for(let i = 0; i < n; i++){
        sum1=sum2=0;
        for(let j = 0; j < n; j++){
            sum1+= arr[i][j];
            sum2+= arr[j][i];
        }    
        answer = Math.max(answer, sum1, sum2);
    }
    return answer;
}

let arr =[
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
];

console.log(MaxNum(arr));
