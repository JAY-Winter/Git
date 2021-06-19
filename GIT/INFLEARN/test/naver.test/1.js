// function solution(A){
//     let answer = [];
    
//     for(let i=0; i<A.length-1; i++){
//         let count = 0;
//         for(let j=i+1; j<A.length;){
//             if(A[i]===A[j]) {
//                 count++;
//             }
//             answer.push(count);
//         }
//     }
//     return answer;
// }

// let arr = [1,2,3,3,3,3,4,4];
// console.log(solution(arr));



function solution(A){
    let answer = [];
    let count = 1;

    for(let i=0; i<A.length-1; i++){
        let pos = i;

        for(let j=i+1; j<A.length; j++){
            if(A[i] !== A[j]) break;
            
            else{
                count++;
            }
        }
        
        answer.push(count);
        count = 1;
    }
    return answer;
}


let arr = [1,2,3,3,3,3,4,4];
console.log(solution(arr));
