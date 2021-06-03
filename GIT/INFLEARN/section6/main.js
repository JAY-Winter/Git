
function solution(A,M){

    let stack = [];
    let n = A.length;

    for(let x of M){

        for(let i=0; i<n; i++){

            if(A[i][x-1]>0){
                stack.push(A[i][x-1]);
                while(stack.pop() === stack[A[i][x-1]]);
            }

        }

    }

    console.log(stack);

}

let board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
]; 
// 0 : 없음, 1,2,3,4,5 : 각각의 기호를 나타냄
// 0 제외하고 stack.push()
// 왜? 포함하면 stack 제일 아랫부분에 0이 남음
let moves = [1,5,3,5,1,2,1,4];
// A의 열 부분만 움직임
// 4, 3, 1, 1, 3, 2, 4
// output : 4,2,4
console.log(solution(board,moves));

// 1. 0 보다 큰 수 중 처음으로 만난 index 를 stack.push
// 2. 같은 index 2개일 때 stack.pop