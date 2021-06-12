function solution(participant, completion) {
    
    var answer = [];
    let marathon = new Set();

    for(let x of participant) marathon.add(x);

    if(marathon.size = participant.length){
        for(let y of completion){
            if(!marathon.has(y)) answer.push(y);
        }
    }    
    return answer;
}

let participant1 = ["leo", "kiki", "eden"];
let completion1 = ["eden", "kiki"];  

let participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion2 = ["josipa", "filipa", "marina", "nikola"];

// let participant3 = ["mislav", "stanko", "mislav", "ana"];
// let completion3 = ["stanko", "ana", "mislav"];

console.log(solution(participant1,completion1));
console.log(solution(participant2,completion2));
// console.log(solution(participant3,completion3));