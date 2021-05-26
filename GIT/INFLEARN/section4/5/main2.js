    function solution(N,K,arr){

            let answer = [];
            let s=[];
            for(let i=0; i<N; i++){

                for(let j=i+1; j<N; j++){

                    for(let k=j+1; k<N; k++){

                        let sum = arr[i]+arr[j]+arr[k];

                            answer.push(sum);               
                            answer.sort((a,b)=> b-a);
                            s = new Set(answer);
                            Array.from(s);
                            
                        }
                    }
                    
                }
                return s;
            }
        
        let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
        console.log(solution(10,3,arr));