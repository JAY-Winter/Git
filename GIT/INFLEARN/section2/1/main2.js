//섹션2 문제 1번 재풀이

function BiggestNum(arr){

    
    let answer =[];
    answer.push(arr[0]+" ");

    for(let i =1; i<arr.length; i++){
    
        if(arr[i-1] < arr[i])
        answer += arr[i]+" ";
    }
    return answer;

}


let arr = [7,3,9,5,6,12];
console.log(BiggestNum(arr));
