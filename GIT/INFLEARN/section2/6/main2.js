//섹션2 문제 6번 재풀이(2)



function MaxSum(arr){
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum1 = sum2 = 0;
    
    for(let i = 0; i < n; i++){
        sum1 = sum2 = 0; 
        // j 로 넘어가기 전에 i =0 일 때의 sum 값을 0 으로 지정 
        for(let j = 0; j < n; j++){
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        // i= 0 이고 j=0에서 시작인 상태에서의 합들을 sum 에 넣음
            }
            answer = Math.max(answer, sum1, sum2);
        }
        sum1 = sum2 = 0;
        for(let i = 0; i < n; i++){
            sum1 += arr[i][i];
            sum2 += arr[i][n-i-1];
        }
        answer = Math.max(answer, sum1, sum2);

        return answer;
    }


    let arr = [
        [10,13,10,12,15],
        [12,39,30,23,11],
        [11,25,50,53,15],
        [19,27,29,37,27],
        [19,13,30,13,19]
    ];
    

console.log(MaxSum(arr));
