function solution(){




}

let arr = [1,2,3,-3,-2,5,6,-6];
console.log(solution());

// 음의 정수는 앞쪽에, 양의 정수는 뒷쪽에
// 양의정수와 음의정수 순서에는 변함이 없어야함

// expected output : -3,-2,-6,1,2,3,5,6

1. idx > 0 뒤로 가야함 -> 음수를 만날 때 까지
2. idx < 0