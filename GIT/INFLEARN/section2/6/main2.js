//섹션2 문제 6번 재풀이(2)

let arr = [
    [10,13,10,12,15],
    [12,39,30,23,11],
    [11,25,50,53,15],
    [19,27,29,37,27],
    [19,13,30,13,19]
];

let n = arr.length;
let sum1 = sum2 = 0;
let answer = Number.MIN_SAFE_INTEGER;



function MaxSum(arr){
    for(let i = 0; i < n; i++){

        for(let j = 0; j < n; j++){
            sum1 += arr[i][j];
            sum2 += arr[j][i];
            }
            
        }
        return answer;
    }



console.log(MaxSum(arr));