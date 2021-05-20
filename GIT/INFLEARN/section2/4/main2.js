//섹션2 문제 4번 재풀이(2)

function score(arr){

    let answer =0;
    let cnt = 0;

    for(let x of arr){
        if(x===1){
            cnt ++;
            answer += cnt;
        }else cnt =0;
    }
    return answer;
}

let arr = [1,0,1,1,1,0,0,1,1,0];

console.log(score(arr));