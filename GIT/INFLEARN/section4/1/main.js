function solution(arr){
    let sum = [];
    let answer = [];
    let max = Number.MIN_SAFE_INTEGER;

    for(let i=0; i<arr.length; i++){
        sum.push(arr[i].toString().split(""));

        var N = arr[i].toString().length;
    }

    for(let j=0; j<sum.length; j++){
        let sum2 =0;
        
        for(let k=0; k<N; k++){
            sum2 += parseInt(sum[j][k]);

            if(sum2>=max) max = sum[j];
        }

        

        answer.push(max);
        
    }
    
    return answer;

}


let arr = [128,460,603,40,521,137,123];
console.log(solution(arr));