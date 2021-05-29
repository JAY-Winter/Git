function solution(M,a){

    let answer = 0, sum =0;
    let n = a.length;

    for(let pl=0; pl<n; pl++){

        sum += a[pl];
        if(sum === M) answer++
        let pr=0;
        while(sum>=M){
            sum -= a[pr++];
            if(sum === M) answer++;
        }
    }
    return answer++;
}

let arr = [1,2,1,3,1,1,1,2];
console.log(solution(6, arr));