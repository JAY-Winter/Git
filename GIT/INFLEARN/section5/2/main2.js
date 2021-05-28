function solution(arr1,arr2){

    let answer =[];
    let p1=p2=0;
    let n = arr1.length;
    let m = arr2.length;

    arr1.sort((a,b)=> a-b);
    arr2.sort((a,b)=> a-b);
    
    while(p1<n && p2<m){
            
        if(arr1[p1]===arr2[p2]) {
            answer.push(arr1[p1]);
            p1++;
            p2++;

        }
        else if(arr1[p1] < arr2[p2]) p1++;
        else p2++
    }
    
    return answer;

}

let arr1 = [1,3,9,5,2];
let arr2 = [3,2,5,7,8];

console.log(solution(arr1,arr2));
