function solution(n,K){

    let answer ;
    let queue = Array.from({length : n}, (v,i) => i+1);
    console.log(queue);

    while(queue.length){
        for(let i=1; i<K; i++) queue.push(queue.shift()); 
        // 2번 반복 한 뒤 
        queue.shift();
        // 3번 째 index 를 shift
        if(queue.length ===1) answer = queue.shift();
        

    }
    return answer;
}


console.log(solution(8,3));

// 3 6 1 5 2 8 4 순으로 제외
