function solution(S,WL){

    let CacheList = Array.from({length : S}, ()=>0);


    WL.forEach(x => {
        
            if(!CacheList.includes(x)){
                
                let N = CacheList.length;
                for(let i=0; i<N; i++){

                    for(let j=0; j<N; j++){
                        

                    }
                }
            }        
    })

}

// 초기 CacheList = [0,0,0,0,0];
let WorkList = [1,2,3,2,6,2,3,5,7];
console.log(solution(5,WorkList));



1. CacheList , WL 비교 후 CacheList 에 WL index 가 없으면
     
    forEach.(WL)
    for() CL {
        if WL index 없으면 {
            for(i){
                for(j)
            }
            CacheList 
        }
    }

