// 섹션1 문제 5 풀이

let arr = [5, 3, 7, 11, 2 ,15, 17];

function solution(arr){
    let min= Number.MAX_SAFE_INTEGER;
    for(let i =0; i<arr.length; i++){
        if(arr[i] < min) min = arr[i];
    }
    return min;
}


console.log(solution(arr));
