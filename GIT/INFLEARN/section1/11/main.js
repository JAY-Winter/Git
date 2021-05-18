//섹션1 문제 11번 풀이

// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개있는지 알아내는 프로그램 작성

let str = "KoreaTimeGood";
let answer =0;
function solution(str){
    for(let x of str){
        if(x ===x.toUpperCase()) answer ++;
    }
    return answer;
}

console.log(solution(str));
