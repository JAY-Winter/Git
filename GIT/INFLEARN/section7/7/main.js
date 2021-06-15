function solution(C){

    for(let i =0; i<C.length-1; i++){

        for(let k=0; k<=1; k++){
            if(C[i][k] > C[i+1][k]){
                [C[i][k], C[i+1][k]] = [C[i+1][k], C[i][k]];

                if(C[k][i+1] > C[i+1][k+1]){
                    [C[k][i+1], C[i+1][k+1]] = [C[i+1][k+1], C[k][i+1]];
                }
            }
    

        }
        
    
    }
    console.log(C);

}

let coordinates = [
    [2,7],
    [1,3],
    [1,2],
    [2,5],
    [3,6]
    ];

    console.log(solution(coordinates));

    // 1. coordinates [x,0] x 오름차순으로 정렬