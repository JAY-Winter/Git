

        function solution(K, A){

            let max = Number.MIN_SAFE_INTEGER;
            let answer =0;
            let n = A.length;
            let sum =0;
            let pr = 0;

            for(let pl =0; pl<n; pl++){

                sum = A[pl]+A[pl+1]+A[pl+2];
                if(sum > max) {
                    max = sum;
                    answer = max;
                }
        }
    return answer;
}

        let arr= [12,15,11,20,25,10,20,19,13,15];


        console.log(solution(3, arr));
