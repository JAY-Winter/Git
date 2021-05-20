//섹션2 문제 3번 재풀이(2)

function RPS(Apick,Bpick){

    let answer ="";
    for(let i =0; i<Apick.length; i++){
        if(Apick[i]===Bpick[i]) answer +="D";
        else if(Apick[i]===1 && Bpick[i]===3) answer +="A";
        else if(Apick[i]===2 && Bpick[i]===1) answer +="A";
        else if(Apick[i]===3 && Bpick[i]===1) answer +="A";
        else answer +="B";
    }
    return answer;
}



let Apick = [2,3,3,1,3];
let Bpick = [1,1,2,2,3];

console.log(RPS(Apick,Bpick));