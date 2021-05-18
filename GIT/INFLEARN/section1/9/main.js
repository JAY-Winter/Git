// 섹션 1 9번 문제

let test = "가나다라 마바사 가나";
let result = test.replace('가','나');

console.log(result);

let test2 = "가나다라 마바사 가나";
let result2 = test.replace(/가/gi,'나');

console.log(result2);


function solution(s){
    let answer= "";
    for(let x of s){
        if(x==='A') answer +='#';
        else answer +=x;
    }
    return answer;
}

let str = "BANANA";


console.log(solution(str));


function solution2(setence){
    let answer2 = setence;
    answer2 = answer2.replace(/A/g,'#');
    return answer2;
}
    
    

console.log(solution2('BANANA'));

