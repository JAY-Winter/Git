function solution(meeting){
    let answer=0;
    meeting.sort((a,b)=> {
        if(a[1]===b[1]) return a[0]-b[0];
        else return a[1]-b[1];
    });
    // arr 을 끝나는 시간 오름차순으로 정렬

    let et=0;
    for(let x of meeting){
        if(x[0]>=et){
            answer++;
            et=x[1];
        }
    }
    return answer;
    console.log(meeting);
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));