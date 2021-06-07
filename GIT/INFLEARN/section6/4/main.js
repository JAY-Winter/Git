function solution(pf){

    let answer ;
    let stack = [];
    let n = pf.lenght;

    for(let x of pf){
        
        console.log(stack);

        if(!isNaN(x)) stack.push(Number(x));
        else{
            let rt = stack.pop();
            let lt = stack.pop();
// .pop() 순서가 중요한 이유
// -,/ 기호에 따라서 값이 달라짐
// 즉, 무엇을 먼저 빼느냐 를 정해주고 이를 식에 대입하는것이 중요 
            if(x ==='+') stack.push(lt+rt);
            else if(x ==='-') stack.push(lt-rt);
            else if(x ==='*') stack.push(lt*rt);
            else if(x ==='/') stack.push(lt/rt);
        }
            
    }

    answer = stack[0];
    return answer;

}
let postfix = "352+*9-";

// 3*(5+2)-9


console.log(solution(postfix));