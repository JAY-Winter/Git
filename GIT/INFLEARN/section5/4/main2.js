function solution(M,a){

    let answer = 0, sum = 0;
    let n = a.length;    
    let lt=0;

    for(let rt=0; rt<n; rt++){

        sum += a[rt];
        // 2번째 포인트가 움직이는 거임
        while(sum > M){
            sum -= a[lt++];
        }
        answer +=(rt-lt+1);

    }
    return answer;
}


let arr = [1,3,1,2,3];
console.log(solution(5,arr));