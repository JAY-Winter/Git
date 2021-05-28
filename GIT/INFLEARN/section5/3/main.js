
function solution(n,M,arr){


let answer=0, sum=0, p2=0;


for(let p1=0; p1<n; p1++){

    sum += arr[p1];
    // sum = sum + arr[p1]; 
    // 
    
    if(sum === M) answer ++;
    while(sum >= M){
        sum -= arr[p2++]
        if(sum===M) answer++;
        }
    }
    return answer;
}

let arr =[1,2,1,3,1,1,1,2];

console.log(solution(8,6,arr));