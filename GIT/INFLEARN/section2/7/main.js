//섹션2 문제 7번 풀이
function Highest(a){

    let answer = 0;
    let n = a.length; 
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1 ];
    // up / right / down / left


    for(let i = 0; i < n; i++){

        for(let j = 0; j < n; j++){
            let flag = 1;
            
            for(let k = 0; k < 4; k++){
                let nx = i+dx[k];
                // 비교 행
                let ny = j+dy[k];
                // 비교 열
                if(nx>=0 && nx<n && ny>= 0 && ny<n && arr[nx][ny] >= arr[i][j]) {
                    // arr[nx][ny] >= arr[i][j] : 좌우상하 비교 대상이 기준점 보다 크거나 같을 시 
                    flag = 0;
                    break; // flag = 0 이면 for(k) 문 도는 것을 멈춤
                } 
            }
            if(flag) answer++;
        }
    }
    return answer;
}    


    let arr =[
        [5,3,7,2,3],
        [3,7,1,6,1],
        [7,2,5,3,4],
        [4,3,6,4,1],
        [8,7,3,5,2]
    ];
    
    

console.log(Highest(arr));