function solution(answers) {
    
    var answer = [];
    
    let a = [1,2,3,4,5],
        b = [2,1,2,3,2,4,2,5],
        c = [3,3,1,1,2,2,4,4,5,5];

    var count1 = 0;

    function count(answers,N){
        answers.forEach((x)=>{
            for(let i of N){
                if(x===i) count1++;
            }
        })
        answer.push(count1);
        count1=0;
    }

    count(answers,a);
    count(answers,b);
    count(answers,c);
    
    return answer;
}

let answers = [1,2,3,4,5];

console.log(solution(answers));