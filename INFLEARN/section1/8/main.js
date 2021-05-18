// //섹션1 8번 문제

// let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

// function solution(arr) {
//     let answer = arr;
//     let sum = answer.reduce((a,b)=>a+b,0 );    
//     for(let i=0; i<8; i++){
//         for(let j=i+1; j<9; j++){
//             if((sum-(answer[i]+answer[j]))===100){
//             answer.splice(j,1); // j에서 그 수 제거
//             answer.splice(i,1); // i에서 그 수 제거
//             }
//         }
//     }
//     return answer;
// }

// console.log(solution(arr));




let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(arr) {
    let answer = arr;
    let sum = answer.reduce((a,b)=> a+b, 0);

    for(let i =0; i<8; i++){
        for(let j= i+1; j<9; j++){
            if((sum -(answer[i]+answer[j]))===100){
               answer.splice(j,1);
               answer.splice(i,1);
// i 를 먼저 지우게 되면 뒤에 index 가 땡겨져서 아래와 같은 배열이 나옴
//  20,  7, 23, 19,
//  10, 25, 13


            }
        }
    }
    return answer; 
}

console.log(solution(arr));