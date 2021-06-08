function solution(M,S){

    let answer = "YES";
    let queue = major.split("");
    // string 으로 이루어진 major 을 하나하나 구분함

    for(let x of S){
        if(queue.includes(x)){
            // incldues() : 배열이 특정 index 르 포함하고 있는지 판별
            if(x !== queue.shift()) return "NO";
            // queue 가 x 를 갖고있고 queue에서 shift 한 게 순서대로 순환하는 x 와 다르면 NO
        }
    }
    if(queue.length >0) return "NO";
    // queue 에 남아있는 index 가 있다는 것은 수강을 안한거임

    return answer;
}

let major = "CBAF";
let subject = "CBDAGE";

console.log(solution(major,subject));