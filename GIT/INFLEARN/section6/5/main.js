
let answer = 0;
let stack = [];

function solution(s){
    let n = s.length;
    for(let i=0; i<n; i++){
        if(s[i]==='(') stack.push('(');
        else{
            stack.pop(); 
            // ')' 만나면 컷팅
            if(s[i-1]==='(') answer += stack.length;
            // stack 에 쌓인 갯수 만큼 answer에 더해줌
            else answer++;
            // '))' 연속 두 개 일 때, 즉 닫힌 괄호일때는 하나만+
            console.log(stack);
        }
    }
    return answer;
}

let str = "()(((()())(())()))(())"
console.log(solution(str));