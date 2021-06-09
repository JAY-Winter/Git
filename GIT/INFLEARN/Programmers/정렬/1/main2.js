function solution(array, commands) {
    let answer = [];
    let arr = [];
    let q=0;
    
    for(let p=0; p<commands.length; p++){
        
        let i = commands[p][q];
        let j = commands[p][q+1];
        let k = commands[p][q+2];

        for(let x=i; x<=j; x++){

            arr.push(array[x-1]);
            arr.sort((a,b) => a-b);
            
            if(arr.length === (j-i)+1) {
                answer.push(arr[k-1]);
                arr =[];            
            }
        }      
    } 
    return answer;
}

let array = [1,5,2,6,3,7,4];
let commands = [
    [2,5,3],
    [4,4,1],
    [1,7,3]
];

console.log(solution(array,commands));