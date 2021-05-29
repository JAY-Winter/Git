
function solution(M,a){

    let n = a.length;
    let answer =0 , sum = 0;

    for(let p1=0; p1<n; p1++){
        
        if(a[p1]<=M) answer++;


        sum += a[p1];
        if(sum <= M) answer++;
        

        let p2=0;
        while(sum>M){
            sum -= a[p2];
            if(sum<=M) answer++;

        }

    }
    return answer;
}

let arr = [1,3,1,2,3];

console.log(solution(5,arr));


