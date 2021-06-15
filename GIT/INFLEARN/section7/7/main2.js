function solution(arr){

    let answer = arr;
    
    arr.sort((a,b)=>{
        if(a[0]==b[0]) return a[1]-b[1];
        // [0] : x 좌표, [1] : y 좌표
        else return a[0]-b[0];
        // x좌표끼리 오름차순으로 정렬해라
    });

    return answer;

}


let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));
