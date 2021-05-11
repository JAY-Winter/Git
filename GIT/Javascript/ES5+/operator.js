//1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 = ${1+2}`);
 
//2. Numeric operators
console.log(1 + 1); // add 더하기
console.log(2 - 1); // substract 빼기
console.log(1 / 1); // divide 나누기 
console.log(2 * 2); // muliply 곱하기
console.log(5 % 2);   // remainder 나머지값
console.log(2 ** 3); // exponentiation 2^3

//3. Increment and decrement operators
let counter = 2;
const preIncrement =  ++counter;
const postIncrement = counter++;
// const preIncrement : counter = counter +1;
// 함수 앞에 ++ 가 붙으면 counter에 1을 더한 다음 preIncrement 에 할당하라
// const PostIncrement : counter = counter +1; 
// 함수 뒤에 ++ 가 붙으면 counter를 postIncrement 에 할당한 다음 1을 더하라
// -- 또한 같은 원리로 동작한다
console.log(`preIncrement: ${preIncrement}, counter : ${counter}`);
console.log(`postIncrement: ${postIncrement}, counter : ${counter}`);
let counter2 = 3;
let postIncrement2 = counter2++;
console.log(`${postIncrement2}`);

//4. Assignment operators : 할당 연산자
let x = 3;
let y = 6; 
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

//5. Logical operators : || (or), && (and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or)
console.log(`or : ${value1 || value2 || check()}`);
// || (or) 연산자는 하나라도 true 면 즉시 머춘다.
// 이말은 즉슨, 첫번째 조건에서 true 가 나오면 그 뒤에 것은 보지도 않고 멈춤
// or 연산자 구성 시, ligth -> heavy 순서로 작동하게 구성

// && (and)
console.log(`and : ${value1 && value2 && check()}`);
// && (and) 연산자는 조건 전부가 ture여야 실행한다.

// !(not)
console.log(!value1);
// not 연산자는 ! 를 이용한다

function check() {
for (let i = 0; i < 10; i++) {
    console.log("워메");
}
return true;
}

//6. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !=+ numberFive);

//7. object
const jay1 = { name : 'jay'};
const jay2 = { name : 'jay'};
const jay3 = jay1;

console.log(jay1 == jay2);
console.log(jay1 === jay2);
console.log(jay1 === jay3);

// equality - puzzler
console.log(0 == false);
// true
console.log(0 === false);
// false
console.log('' == false);
// false -> true
console.log('' === false);
// true -> false (why? : boolean type이 아니기 때문)
console.log(null == undefined);
// true
console.log(null === undefined);
// false

// 8. if
const name = 'abc';
if(name === 'jay'){
    console.log('Welcome!');
} else if (name === 'coder'){
    console.log('Coder!');
} else {
    console.log('unknown');
}

//9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'jay'?'yes' : 'no');