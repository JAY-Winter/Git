let answer = "";

function DFS(L){
    if(L===0) return;
    else{
        DFS(L-1);
        answer += L+" ";
    }
    return answer;
}
DFS(3);

function subset(X){
    let sub = "";
    for(let x of X){
        sub += x;
    }
    return sub;
}
console.log(subset(answer));
