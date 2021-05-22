// 섹션2 문제 1번 풀이

//자신의 바로 앞 수보다 큰 수만 한 줄로 출력
let arr =["7","3","9","5","6","12"];


function B_Num(arr){
    let answer =[];
    answer.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        if(arr[i] > arr[i-1]) answer.push(arr[i]);
    }
    return answer;
}

console.log(B_Num(arr));