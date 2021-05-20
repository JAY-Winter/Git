//섹션2 문제 3 풀이


function RPS (arrA,arrB){
    let answer = "";
      
    for(let i=0; i<arrA.length; i++){
        if(arrA[i]===arrB[i]) answer+="D";
        else if(arrA[i]===1 && arrB[i]===3) answer +="A"+;
        else if(arrA[i]===2 && arrB[i]===1) answer +="A";
        else if(arrA[i]===3 && arrB[i]===2) answer +="A";
        else answer+="B";




    }
        return answer;

    }

let arrA =[2,3,3,1,3];
let arrB =[1,1,2,2,3];

console.log(RPS(arrA,arrB));