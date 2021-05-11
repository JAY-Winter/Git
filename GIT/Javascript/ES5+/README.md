/h1 variable.js 
0. 'use strict'
use strict 에 대해 생각해보기 전,
우리는 Javascript 의 역사에 대해 먼저 생각해볼 필요가 있다.
Javascript 는 빠르고 유연함을 위해 만들어진 언어로써
flexable 히지만 반대로 dangerous 한 언어라고 할 수 있다.
즉, 양날의 검이라고 할 수 있다.

a = 1 ;

->  use strict 를 선언하지 않으면
    html 상에서는 문제없이 작동한다.
    하지만 use strict 를 선언하면 
    variable.js:6 Uncaught ReferenceError: a is not defined
    at variable.js:6
    식으로 정의되지 않았다고 경고창이 뜬다.

-> 따라서 우리는
    let a;
    a =1;
    라고 a 를 선언해줌으로써 a 를 쓰겠다 말하고
    a 에 변수를 넣어주는 것이다.

-> 안전하게 작동할 수 있도록 도와주는 안전장치 라고 생각하자.


1. Various Data type 
    let
    var
    Why we don't use VAR !
    

1-1. let
mutable data type
Data type 에는 
mutable / immutable 이 있는데
let 변수 선언 데이터 타입은
mutable 타입이다.
그럼에도 불구하고
var 대신 쓰이는 이유는
아래에 설명했다 싶이, var 은 block scope에서
벗어날 수 있는. 즉, 천방지축인 변수 선언문이기 떄문..

1-2. var
hoisting : move declaration from bottom to top<
즉, 어디에 선언했냐 상관없이 항상 top 으로 선언을 끌어올림
* hoist : 끌어 올리다
block scope 를 철저히 무시함
line 24 ~ 30 를 보면
block scope 에서 정의된 변수 age 가 
block 밖에서도 실행되는 모습을 볼 수 있다.


 2. Constants
 favor immutable data type always for a few reasons
 - security
 - thread safety
 - reduce human mistakes

2-1. Variable / Constant
 - Variable : Read, Write 가능
- Constant : Only Read 가능

2-2. Immutable / Mutable
- Immutable data types : premitive, frozen objects

- Mutable data types : 
all objects by default are mutalbe in JS
    - security
    - thread safety
    - reduce human mistakes

 3. Variable types
 primitive, single item  : number, string, boolean, null, undefined, symbol
object,box contatiner, function, first-class function 

/h1 operator.js

1. String 