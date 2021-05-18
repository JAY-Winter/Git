// 섹션1 문제 7 번 풀이
// 목적. 오늘 날짜 일의 자리 = 차량번호 일의 자리
//     -> 금지 차량 지정
// 1. 배열에 차량번호 대입
// 2. 날짜와 차량번호 자리 확인  
// 3. 금지된 차량 대수 출력



let arr = [25, 23, 11, 47, 53, 17, 30];

function solution(arr,day){
    let answer = 0;
    
    for(let x of arr){
        if(x%10 === day) answer ++;{
            if(x%10 === 0) answer ++;
        }
        
    }
    return answer;

}

console.log(solution(arr,3));