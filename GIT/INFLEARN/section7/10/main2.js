function solution(A,target){

    let answer;
    let lt=0;
    let rt=A.length-1;
    
    A.sort();

    while(lt<=rt){
        let mid=parseInt((lt+rt)/2);
        
        if(A[mid]===target){
            answer = mid+1;
            break;
        }
        else if(arr[mid]>target) rt=mid-1;
        else lt=mid+1;
        console.log(mid);
    }

    return answer;


}

let arr = [23,87,65,12,57,32,99,81];
// 12,23,32,57,65,81,87,99
console.log(solution(arr,32));