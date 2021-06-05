
function solution(S){

let answer;
let stack = [];


for(let x of S){
    
    if(!isNaN(x)) stack.push(Number(x));
    else {

        let rt = stack.pop();
        let lt = stack.pop();
    
        if(x==='+') stack.push(lt+rt);
        else if(x==='-') stack.push(lt-rt);
        else if(x==='*') stack.push(lt*rt);
        else if(x==='/') stack.push(lt/rt);
        }
    
        console.log(stack);
}



}


let str = "352+*9-";

console.log(solution(str));