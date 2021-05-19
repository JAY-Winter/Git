//섹션1 문제 17번 재풀이(2)

// 1. 배열 선언
// 2. .filter() 를 이용해 조건에 부합하는 새로운 배열
// 2-1. if 조건 -> .indexOf() 
// 3. answer 출력

let str =["good", "time", "good", "time", "student"];

function solution(s){
    let answer;
    answer = s.filter((v,i)=>{
        if(s.indexOf(v) === i) return v;
        // v로 이루어진 새로운 배열 = answer
    });
    return answer; 
    
}

console.log(solution(str));