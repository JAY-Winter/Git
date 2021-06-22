function solution(N){

    let answer  = "";
    
    while(N>0){
        
        solution(Math.floor(N/2));
        
        answer += N%2;
        console.log(N%2);
        if(N=1) break;
    }
}

solution(11);