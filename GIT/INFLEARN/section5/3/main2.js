function solution(N, a){
    
    let answer =0, sum=0;
    let p2=0;
    let M = a.length;

    for(let p1 =0; p1<M; p1++){
        // for() 문에서 initialization 선언해야함.
        // let 으로 선언한 변수는 반복문의 지역변수가 됨
        // var 으로 선언한 변수는 반복문에 제한되지 않음
        // 그러면 let p1=0 을 for() 문 밖에서 선언하면 for() 문에서는 적용되지 않는가보다!
        sum += a[p1];
        if(sum===N) answer ++;

        while(sum>=N){
            sum-=a[p2++];
            if(sum===N) answer++
        }
    }
    return answer;
}

let arr =[1,2,1,3,1,1,1,2];

console.log(solution(6,arr));