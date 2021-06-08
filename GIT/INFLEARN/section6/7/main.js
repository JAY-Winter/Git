function solution(M,S){

    let answer = "Yes";

    let queue = M.split("");

    for(let x of S){
        if(queue.includes(x)) {
            if(x !== queue.shift()) return "NO";
        }
    }
    if(queue.length > 0) return "NO";
    return answer;
}

let mandatory = "CBA";
let str = "CDBGAE";

console.log(solution(mandatory,str));

