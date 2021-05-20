//섹션2 문제4번 풀이

function score (mark){

    let answer = 0;
    let cnt = 0;    
    
    for(let x of mark){

        if(x===1) {
            cnt++;
            answer += cnt;
        } else cnt = 0;
        
    }    
        return answer;

    }



let mark = [1,0,1,1,1,0,0,1,1,0];

console.log(score(mark));