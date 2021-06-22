function solution(N){

    while(N>0){
        solution(N-1);
        console.log(N);    
        if(N=0) break;
    }
    
}

solution(3);