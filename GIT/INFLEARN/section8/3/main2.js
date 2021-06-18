function solution(n){

    let answer = "";

    function DFS(L){
        

        if(L>7) return;
        else{
            answer += L+" ";
            DFS(L*2);
            DFS(L*2+1);

        }
    }
    DFS(n);
    return answer;
}

console.log(solution(1));