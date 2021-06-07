function solution(N,K){

    let answer;
    let queue = Array.from({length : N}, (v,i) => i+1);

    while(queue.length){

        for(let i=1; i<K; i++) queue.push(queue.shift());
        queue.shift();

        if(queue.length===1) answer = queue.shift();
    }
    return answer;
}


console.log(solution(8,3));