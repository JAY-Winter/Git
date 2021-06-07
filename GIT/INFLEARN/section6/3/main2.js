function solution(board, moves){

    let answer =0;
    let stack =[];
    let n = board.length;

    moves.forEach(pos => {
        // forEach(element)  element : moves's elements
        // element 가 순회적으로 돔
        for(let i=0; i<n; i++){
            if(board[i][pos-1] !== 0){
                let tmp = board[i][pos-1];
                // 집는 인형을 tmp 란 새로운 변수로 선언
                board[i][pos-1]=0;
                // 이훙 뽑은 인형을 0 으로 바꿈
                if(tmp===stack[stack.length-1]){
                // ex) 3개를 뽑았을 때 stack.lenght-1 해야 index 번호로 2번이기 때문에 .lenght-1
                    stack.pop();
                    answer += 2;
                // 한 쌍이 터지기 때문에 count up 2 
                }
                else stack.push(tmp);
                break;
            }
        }
    });
    return answer;
}


let a=[
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));