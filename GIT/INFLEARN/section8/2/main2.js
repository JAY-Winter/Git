function solution(n){

    function DFS(L){
        let answer = "";

        if(L/2===0) return;
        else{
            DFS(L%2);
            answer += L;
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(11));