
function solution(s) {
    
    let answer ="YES";
    let n = str.length;
    
    s = s.toLowerCase();

    for(let i=0; i<Math.floor(n/2); i++){
        if(s.split('').reverse().join('')!==s) return 'No';
    }

    return answer;

}


let str = "GOOOT";

console.log(solution(str));