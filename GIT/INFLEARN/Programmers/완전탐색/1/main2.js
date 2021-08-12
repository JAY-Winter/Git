function solution(answers){

    let answer = [];

    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];

    let countArr =[0,0,0];

    let N = answers.length;

    for(let i=0; i<N; i++){
        if(answers[i] === one[i%5]) countArr[0]++;

        if(answer[i] === two[i%8]) countArr[1]++;

        if(answer[i] === three[i%10]) countArr[2]++;
    }
    
    let max = countArr.reduce((a,b)=> {
        return Math.max(a,b);
    });

    if(max === countArr[0]) answer.push(1);
    if(max === countArr[1]) answer.push(2);
    if(max === countArr[2]) answer.push(3);

    return answer;

}

console.log(solution([1,2,3,4,5]));