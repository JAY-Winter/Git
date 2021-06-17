function DFS(L){

    if(L===0) return;
    else{
        DFS(L-1);
        console.log(L);
    }

}
DFS(3);