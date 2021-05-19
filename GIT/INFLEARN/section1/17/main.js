// 섹션 1 문제 17 풀이


function solution(s){
    let answer; 
    answer = s.filter((v,i)=> {
        // s.filter 함수 str 에 대해서 조건에 부합하는 새로운 배열을 만들어냄
        // v : 함수 str 의 value 
        // i : 함수 str 의 index 번호
        if(s.indexOf(v)===i) return v; 
    }); 
    return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
