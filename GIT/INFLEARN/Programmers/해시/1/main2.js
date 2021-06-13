function solution(participant, completion) {

    var answer = "";
    let incompletion = new Map();


    participant.forEach(x => {
        
        for(let i =0; i<completion.length; i++){
            
            if(!incompletion.has(x)) incompletion.set(x,0);

            if(x=completion[i]) {
                incompletion.set(x,incompletion.get(x)+1);
            }else incompletion.set(x,0);

           
            
        }

        
    });
    console.log(incompletion)

    return answer;
}

let participant1 = ["leo", "kiki", "eden"];
let completion1 = ["eden", "kiki"];

let participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion2 = ["josipa", "filipa", "marina", "nikola"];

let participant3 = ["mislav", "stanko", "mislav", "ana"];
let completion3 = ["stanko", "ana", "mislav"];

console.log(solution(participant1,completion1));
console.log(solution(participant2,completion2));
console.log(solution(participant3,completion3));