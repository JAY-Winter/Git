
function solution(B,M){

    let stack = [];
    let n = B.length;
    let answer=0;

    for(let x of M){

        for(let i=0; i<n; i++){
            if(B[i][x-1]>0){
                stack.push(B[i][x-1]);
                B[i][x-1] = 0;
                    
                break;                
            } 

            let m = stack.length;
        for(let j=0; j<m; j++){
            if(stack[j]===stack[j+1]){
                while(stack.pop() ===stack[j]);
                answer +=2;
                }
            }           
        }
    }
        
    return answer;
}

let board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
]; 

let moves = [1,5,3,5,1,2,1,4];

console.log(solution(board,moves));