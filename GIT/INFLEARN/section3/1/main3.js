function solution(S){

    S = S.toLowerCase();
    let answer ="YES";
    let N = Math.floor(S/2);
    

    for(let i=0; i<S.length; i++){
        
        for(let j=S.length-1; j>=N; j--){
            if(S[i] === S[j]) break;
            else return "NO";
        }
    }
    return answer;
}

let str = "gooG";
console.log(solution(str));