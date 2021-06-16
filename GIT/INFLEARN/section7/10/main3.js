function solution(A,target){

    let answer;
    let Lt=0, Rt=A.length-1;
    
    A.sort((a,b)=>a-b);

    while(Lt<=Rt){
        let mid=parseInt((Lt+Rt)/2);
        if(A[mid]===target) {
            answer=mid+1;
            break;
        }
        else if(A[mid]>target) Rt=mid-1;
        else Lt=mid+1;

    }



    
    


    return answer;
}

let arr = [23,87,65,12,57,32,99,81];
// 12,23,32,57,65,81,87,99
// 12,23,32
console.log(solution(arr,32));