function solution(n){
    let answer = [];
    let ch = Array.from({length:n+1},()=>0);
    // 새로운 배열 생성 ch = [0,0,0,0];

    function DFS(L){
        if(L===n+1){
            let tmp = "";
            for(let i=1; i<=n; i++){
                if(ch[i]===1) tmp+=(i+" ");
            }
            if(tmp.length>0) answer.push(tmp.trim());
        }
        else{
            ch[L]=1;
            DFS(L+1);
            ch[L]=0;
            DFS(L+1);
        }
    }
    DFS(1);
    return answer;
}

console.log(solution(3));




D(1) ch = [0,1,0,0] -> DFS(2)
D(2) ch = [0,1,1,0] -> DFS(3)
D(3) ch = [0,0,0,3] -> DFS(4)
D(4) let
