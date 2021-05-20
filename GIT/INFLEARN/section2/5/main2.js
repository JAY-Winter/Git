//섹션2 문제 5번 재풀이(2);

function rank(s){

    let n = mark.length;
    let answer = Array.from({length : n},() =>1);

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(s[i] < s[j]) {
                answer[i]++;
            }
        }
    }
    return answer;
}


let mark = [87, 89, 92, 100, 76];
console.log(rank(mark));