/*Function is set of statements that performs a task and calculates a value 

Function Declaration/Function Definition/Function Statement: */
    
    //Primitive Call
    function square(number){
        return number*number; //function body
    }
    let squaredNumber=square(4); //16

    //Non Primitive Call
    function objectCall(obj){
        obj.company="Honda"
    }
    let carObj={
        kind:"4-wheeler",
        company:"Suzuki"
    }
    objectCall(carObj);
    console.log(carObj);
    /*Output: {
        kind:"4-wheeler",
        company:"Honda"}
    */

/* N.B:
    1. Primitve Data Types ------> Call By Value
    2. Non-Primitive Type(Array,Object)------>Call By Reference
*/

/*Function Expression: Functions can be created using expressions.Generally they are the 
            anonymous function but however a name can be provided to them.For example: */
            
            //Case 1(Anonymous Function):
            const square = function(number){
                return number * number;
            }
            let squaredNumber = square(10);     // 100

            //Case 2(Named Function):Helps in recursion
            const factorial = function fac(number){
                return number<2? 1: number*fac(number-1)
            }
            const factorialedNumber= factorial(3);

/*N.B: A method is function that is property of an object.*

/* ***********************Function Hoisting ***************************************
 Function declaration can be hoisted in cases like this:
    Example1:  */
        console.log(square(5)); //25
        function square(n) { return n * n } 
    /* Here the whole function defintion gets to the top and gets hoisted.Hence the output is 25.*/

    /*Example2: Fails here and throws an error here.  */
        console.log(square)    // square is hoisted with an initial value undefined.
        console.log(square(5)) // Uncaught TypeError: square is not a function
        const square = function(n) { 
          return n * n; 
        }
/*Funtion Scope:
A function defined inside another function has access to all variables defined in its parent function,
 and any other variables to which the parent function has access.
*/
        var num1 = 20,
            num2 = 3,
            name = 'Ayush';

        // This function is defined in the global scope
        function multiply() {
          return num1 * num2;
        }

        multiply(); // Returns 60

        // A nested function example
        function getScore() {
          var num1 = 2,
              num2 = 3;

        function add() {
            return name + ' scored ' + (num1 + num2);
          }

          return add();
        }

        getScore(); //Ayush scored 5

/* A function can refer to itself is called as Recursion. There are three ways for function to refer itself.
        1. The Function Name itself
        2. argument.callee
        3. An in-scope variable that refers to the function.
    For example: */
    var foo = function bar() {
        // statements go here.
        /* Here all the three statements are correct:
            - bar()
            - arguments.callee()
            - foo()
     }
     /* However the recursion uses the stack :function stack.For that,lets'consider the below example:*/
        function foo(i){
            if(i<0) return;
            console.log("Begin: ",i);
            foo(i-1);
            console.log("End: ",i);
        } 
        foo(3);
        /*Output: 
            Begin: 3
            Begin: 2
            Begin: 1
            Begin: 0
            End: 0
            End: 1
            End: 2
            End: 3

