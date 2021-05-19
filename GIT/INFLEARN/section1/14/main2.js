// 섹션 1 문제 14번 재풀이(2)

let arr = ['5', 'teacher', 'time', 'student', 'beautiful', 'good'];

function solution(arr){
    let answer ="";
    let min = Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        if(x.length > min) {
            min = x.length;
            answer =x;
        }
    }
    return answer;

}

console.log(solution(arr));