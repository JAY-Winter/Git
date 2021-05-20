//섹션2 문제 2번 재풀이(3);

function Tallest(list){
    
    let answer =1;
    let max = list[0];
    for(let i=1; i<list.length; i++){
        if(list[i] > max) {
            answer++;
            max = list[i];
        }
    }
    return answer;
}

let list = [130, 135, 148, 140, 145, 150, 150, 153];

console.log(Tallest(list));
