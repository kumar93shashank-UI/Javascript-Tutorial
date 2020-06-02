/*Nested Functions and Closures

The nested (inner) function is private to its containing (outer) function.

It also forms a closure. A closure is an expression (most commonly, a function) 
that can have free variables together with an environment that binds those variables 
(that "closes" the expression). 

To summarize:
    - The inner function can only be accessed from the outer function statements.
    - The inner function forms a closure : the inner function can use the variables from outside,
        while the outer function can't use the arguments and variables of the inner function.
        For example: */

        function closureExplained(outerVariable){
            function innerFunction(innerVariable){
                console.log("Outer Variable: ",outerVariable)
                console.log("innerVariable: ",innerVariable);
            }
            console.dir(innerFunction);
            return innerFunction
        }
        closureExplained("hello")("world");
        /*Output: ƒ innerFunction(innerVariable)
                    arguments: null
                    caller: null
                    length: 1
                    name: "innerFunction"
                    prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM310:2
                    [[Scopes]]: Scopes[2]
                        0: Closure (closureExplained)outerVariable: "hello"
                        1: Global {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

                    Outer Variable: hello
                    Inner Variable: world
        
        /* Line No 23 can be written as below. Both are same.*/
            let fn_inside = closureExplained("kumar");
            let result = fn_inside("Bengaluru");
    
        /* As we can realize that each call in line no. 39 can provide potentially different arguments
            a new closure is created everytime for each call to the outside.The memory can be freed 
            only when the inner function is no longer accessible.*/
        
        /* Multiply-Nested Functions: 
            When the multiple functions are nested,there will be multiple scopes.Hence, we can conclude
            that closures have multiple scopes.for example: */
            function A(x){
                return function B(y){
                    return function C(z){
                         console.log("Hello",x+y+z);
                    }
                }
            }
            /* In the above example A will not have access to B and hence C's variable.
                but C will be having the access to A's variables using closures concept.
                In other words, C chains the scope of B and A,i.e scope chaining is happening here.
                Just to note one point:
                    If the innerVariable's name === outerVariable's name 
                    then the innerVariable will take the precedence.
                */
        
        //Most common interview question:
            for(var i=0;i<5;i++){
                setTimeout(function(){
                    console.log("index is ",i)
                },1000);
            }
            /* Change the output of the above function to 0 1 2 3 4 without using let.Try ...
            .
            .
            .
            .
            .
            .
            .
            .

            Here is the solution:*/
            
            for(var i=0;i<5;i++){
                ( function (i){
                    console.log("index is 2 ",i)
                    setTimeout(function(){
                    console.log("index is ",i)
                },1000);
                })(i)
            }

            /* We are basically using (IIFE) to create a closure around setTimeout.*/

            /* ----------------------------------------------------------------------------------*/

            /* The arguments of the function are maintained in an array like object.
                For example:  */
                function stringConcatenation(separator){
                    let result="";
                    for(let i=1;i<arguments.length;i++){
                        result+= arguments[i]+separator;
                    }
                    console.log("result is ",result);
                }
                stringConcatenation("_","Shashank","Kumar","Bangalore");
                /*Output: 
                    Shashank-Kumar-Bangalore (as we are taking the indices from i=1)
                    --Shashank-Kumar-Bangalore(if we take indices from i=0)
                
                Please note that arguments doesn't possess all the methods of array manipulation.

Default Parameters:After the introduction of ES2015 it is passed like: */
        function Multiply( firstVariable,secondVariable=10){
            console.log("Result: ",firstVariable*secondVariable);
        }
        Multiply(2,5);//Result: 10
        Multiply(2); //Result: 20

/* Rest Parameters: Allows you to pass infinite number of arguments as an array. For example:*/
        function multiplyByNumber(multiplier,...Numbers){
            return Numbers.map(number => number * multiplier)
        }
        const result = multiplyByNumber(4,2,3,4,6);
        console.log("result: ",result); // [8,12,16,24] 

/* Arrow Functions: Factors that affected the introduction of arrow functions:
        1. Shorter Functions
        2. Non-Binding of this.
    With the introduction of arrow functions, "this" keyword was fixed to value of the enclosing 
    execution context is used and it is now not dangling like below:
    
    Until arrow functions, every new function defined its own this value
     (a new object in the case of a constructor, undefined in strict mode
        function calls, the base object if the function is called as an "object method",
        etc.). This proved to be less than ideal with an object-oriented style of programming.

    For example:
        Case 1: Shorter Syntax:*/
            let names = ["Shashank","Piyush","Sneha","Bangalore"];
            const resultWithoutArrowFunc=names.map(function(name){
                return name.length;
            })
            const resultWithArrowFunc=names.map((name)=>name.length);
            console.log("resultWithoutArrowFunc: ",resultWithoutArrowFunc);
            console.log("resultWithArrowFunc",resultWithArrowFunc);
            /* Output : resultWithoutArrowFunc: [8,6,5,9]
                        resultWithArrowFunc: [8,6,5,9]
        
        Case 2 : Binding of this example */
        function Person(){
            this.age = 0;
            setInterval:(()=>{
                this.age++
            },1000)
        }
        var Shashank= new Person();  



