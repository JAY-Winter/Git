
function solution(Size,A){

    let answer = Array.from({length:Size},()=>0);
    let N = answer.length;

    A.forEach(x=>{
    // 일치하는 자리번호 구하기
        let pos =-1;
        for(let i=0; i<N; i++){
            if(x===answer[i]) pos = i;
        }
    // answer[] 에 x 가 없을 때
        if(pos===-1){
        for(let i=Size-1; i>=1; i--){
            answer[i] = answer[i-1];
         
        }
        }else{
        // answer[] 에 x 가 있을 때    
        for(let i=pos; i>=1; i--){
                answer[i] = answer[i-1];
            }
        } answer[0] = x;       
        console.log(answer);
    })
    return answer;
}


let arr = [1,2,3,2,6,2,3,5,7];

console.log(solution(5,arr));