    let
    var
    Why we don't use VAR !
    
        hoisting : move declaration from bottom to top<
        즉, 어디에 선언했냐 상관없이 항상 top 으로 선언을 끌어올림
        * hoist : 끌어 올리다
        block scope 를 철저히 무시함
        
        line 24 ~ 30 를 보면
        block scope 에서 정의된 변수 age 가 
        block 밖에서도 실행되는 모습을 볼 수 있다.



 3. Constants
 favor immutable data type always for a few reasons
 - security
 - thread safety
 - reduce human mistakes


 4. Variable types
 primitive, single item  : number, string, boolean, null, undefined, symbol
object,box contatiner, function, first-class function 