// 섹션2 문제 1번 풀이

//자신의 바로 앞 수보다 큰 수만 한 줄로 출력
let arr =[7,3,9,5,6,12];

// function BiggestNum(arr){
//     let answer =[];
//     for(let i=0; i<arr.length; i++ ){
//         for(let j = i+1;){
//             if(arr[j]>arr[i]) answer.push(arr[j]);
//         }

//     }
//     return answer;

// }

// console.log(BiggestNum(arr));


function B_Num(arr){
    let answer =[];
    answer.push(arr[0]);
    for(let i=1; i<arr.length; i++){
        if(arr[i] > arr[i-1]) answer.push(arr[i]);
    }
    return answer;
}

console.log(B_Num(arr));