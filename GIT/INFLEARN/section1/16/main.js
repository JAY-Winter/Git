// 섹션1 문제 16번 풀이


// function solution(str){
//     let answer =[] ;
//     for(let x of str){
//         answer.push(x);
//         for(let i=0; i<answer.lentgth; i++){
//             if(answer[i].charCodeAt() === )
//         }
//     }
// }

// console.log(solution(string));


let str = "ksekkset";

function solution(s){
    let answer ="";

    for(let i =0; i<s.length; i++){
        if(s.indexOf(s[i]) === i) answer += s[i];
    }
    return answer; 

}

console.log(solution(str));

