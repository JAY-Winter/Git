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