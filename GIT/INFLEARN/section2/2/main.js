// 섹션 2 문제 2번 풀이

function tallest(arr){
    let answer = [];
    let max = Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        if(x > max) {
            max = x;
            answer.push(x);
        }

    }
    return answer.length;
}

let arr =[130, 135, 148, 140, 145, 150, 150, 153];
console.log(tallest(arr));