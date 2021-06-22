function solution(participant, completion) {

    var answer = "";
    let list = new Map;

    participant.forEach((x)=>{
        if(list.has(x)) list.set(x, (list.get(x))+1);
        else list.set(x,1);
    });

    for(let y of completion){
        if(list.has(y)) list.set(y, (list.get(y))-1);
    }

    for(let [key,val] of list){
        if(val > 0 ) answer += key;    
    };

    return answer;
}


// let participant = ["leo", "kiki", "eden"];
// let completion = ["eden", "kiki"];
// 
// let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
// let completion = ["josipa", "filipa", "marina", "nikola"];

let participant = ["mislav", "stanko", "mislav", "ana"]; 
let completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));