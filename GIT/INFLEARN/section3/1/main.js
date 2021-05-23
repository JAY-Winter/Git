//섹션3 문제 1번 풀이

function solution(s){
    let answer ="YES";
    s= s.toLowerCase();
    // .toLowerCase() Method 이므로 '.' '()' 주의
    let n = str.length;

    for(let i=0; i<Math.floor(n/2); i++){
        // 확실하게하기위해 몫을 나타내는 Math.floor() 이용
        if( s[i] !== s[n-1-i]) return "NO";
        
    }
    return answer;
}

let str = "g000G"

console.log(solution(str));


