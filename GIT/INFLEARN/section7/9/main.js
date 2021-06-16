function solution(Attendance){

    let answer =[];


    Attendance.sort((a,b)=> a[0]-b[0]);
    

    for(let x of Attendance){
        let count =0;
        for(let i=0; i<Attendance.length; i++){
        
            if(x[1]<Attendance[i][0]) count++;
        }    
        answer.push(count);
    }
    console.log(answer);
    console.log(Attendance);
    let max = Math.max.apply(null,answer);


    return max;
}

let arr = [
    [14,18],
    [12,15],
    [15,20],
    [20,30],
    [5,14]
];
// sorted arr = [ [ 5, 14 ], [ 12, 15 ], [ 14, 18 ], [ 15, 20 ], [ 20, 30 ] ]

console.log(solution(arr));

