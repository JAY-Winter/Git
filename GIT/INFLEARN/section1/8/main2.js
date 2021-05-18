// 섹션 1 8번 문제 

// 1. 함수 선언

// 2. 반복 구조
// 2-1. x 가 돌 때
// 2-2. y 가 돌 때 (y=x+1)

// 3. 출력

// sum -(x+y) = 100 
// => 기존 배열에서 x, y 제외


let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
let answer = arr;
function solution(arr){
    let sum = arr.reduce((a,b)=> a+b,0);
    for(let i=0; i<9; i++){
        for(let j=i+1; j<8;){
            if(sum-(arr[i]+arr[j])) = 100){
                answer.splice(j,1);
                answer.splice(i,1);
            }
        }    
    }
    return answer;
}

console.log(solution(arr));




