function solution(S,WL){
    let CacheList = Array.from({length : S}, ()=>0);

    let N = CacheList.length;
    
    WL.forEach(x => {
        
        let pos = -1;
        for(let i=0; i<N; i++){
            if(!CacheList.includes(x)){
                pos=i;
                CacheList.unshift(x);
                CacheList.pop();
            }else if(CacheList.includes(x)){
                CacheList.splice(pos,1);
                CacheList.unshift(x);
            }console.log(CacheList);
            if(CacheList.length=5) break;    
        
        }
      
    })
    return CacheList;
}

// 초기 CacheList = [0,0,0,0,0];
let WorkList = [1,2,3,2,6,2,3,5,7];
console.log(solution(5,WorkList));