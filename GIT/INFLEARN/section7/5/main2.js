function solution(S,A){

    let answer = Array.from({length:S},()=>0);
    // answer = [0,0,0,0,0]
    
    A.forEach(x => {
        
        let pos=-1;
        for(let i=0; i<S; i++) if(x===A[i]) pos=i;
        // 동일 index 있을 때 pos 에 i 값 부여(자리 지정)
        console.log(answer);
        if(pos===-1){
        // 동일 index 가 없으면
            for(let i=S-1; i>=1; i--){
                answer[i]=answer[i-1];
            }
        }else{
        // 동일 index 있을 때
            for(let i=pos; i>=1; i--){
                answer[i]=answer[i-1];
            }
        } 
        
        answer[0] =x;
    });
    

return answer;

}



let arr = [1,2,3,2,6,2,3,5,7];
console.log(solution(5,arr));