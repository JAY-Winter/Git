// 1. Use srict
// added inn ES 5
// use this for Valina Javascript
'use strict';

// 2. variable 
// 변수 선언 let ! 
let globalName = ' global name';

{
    let name = 'jay';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constants

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable Types
// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
const helloBob = `hi ${brendan}!`;
// ` ${}  `  이용시 변수의 값이 자동적으로 붙어서 나옴
console.log(`value : ${helloBob}, type: ${typeof helloBob}`);

//5. boolean
//boolean
const canRead = true;
const test = 3 <1 ;
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

//null 
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

//undefined
let x ;
console.log(`value : ${x}, type : ${typeof x}`);

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1} `)

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(`value : ${text}, type : ${typeof text}`);
text = 1; 
console.log(`value : ${text}, type : ${typeof text}`);
text = '7'+ 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8 '/'2';
console.log(`value : ${text}, type : ${typeof text}`);

commit test