/* Operators:
        - Assignment operators : = , += , -=, *=, /=, %=, **=(exponential), <<=, >>=, >>>=, &=, |=, ^=, 
        - Comparison operators: == , !=, ===, !==, >, >=, <, <= 
        - Arithmetic operators: %, ++, --, -(e.g. x=3,-x=-3), +(e.g. +"3" returns 3.
                                                                +true returns 1.)
        - Bitwise operators: &, |, ^, ~, <<, >>, >>>, 
        - Logical operators: &&, ||, !
        - String operators: +
        - Conditional (ternary) operator:           condition ? val1 : val2
        - Comma operator:  simply evaluates both of its operands and returns the value of the last operand
        - Unary operators: delete,typeof,void
        - Relational operators:in, instanceof

*/

/*Destructuring: Javascript expression to extract the data from JS array or object.For example: */
    var foo = ['one', 'two', 'three'];
    //without destructuring 
        var one = foo[0];
        var two = foo[1];
        var three = foo[2];
        console.log(`${one} ${two} ${three}`); // one two three
    //with destructring
        var[one,two,three]=foo;
        console.log(`${one} ${two} ${three}`); //one two three

/*Delete Operator: Used to delete an object, an object's property, or an element at a specified index 
                    in an array.Few Examples are: */
                    delete objectName;
                    delete objectName.property;
                    delete objectName[index];
                    delete property; // legal only within a with statement
    /*We can use the delete operator to delete variables declared implicitly but not those declared 
            with the var statement/*
    If the delete operator succeeds, it sets the property or element to undefined. 
            The delete operator returns true if the operation is succeesful; it returns false if the
            operation is not successful.
    */
                    x = 42;
                    var y = 43;
                    myobj = new Number();
                    myobj.h = 4;    // create property h
                    delete x;       // returns true (can delete if declared implicitly)
                    delete y;       // returns false (cannot delete if declared with var)
                    delete Math.PI; // returns false (cannot delete predefined properties)
                    delete myobj.h; // returns true (can delete user-defined properties)
                    delete myobj;  // returns true (can delete if declared implicitly)
/*Deleting array elements: When we delete an element of an array the length is not impacted.Example-*/
var tress=["A","B","C"];
delete tress[1];
console.log("tress: ",tress) // tress:  ["A", empty, "C"]
console.log("tress-secondElement:",tress[1]); // tress-secondElement:undefined

/*Typeof: Returns a string indicating the type of the unevaluated operand.For example:*/
        var myFun = new Function('5 + 2'); 
        var shape = 'round';
        var size = 1;
        var foo = ['Apple', 'Mango', 'Orange'];
        var today = new Date();

        console.log(typeof myFun);       // function
        console.log(typeof shape);       // string
        console.log(typeof size);        // number
        console.log(typeof foo);         // object
        console.log(typeof (today));       // object
        console.log(typeof doesntExist); // undefined 

        // Parantheses surrounding typeof is optional

/*Void: specifies an expression to be evaluated without returning a value. 
        Syntax: void (expression)
                void expression */
        // Examples::::
            <a href="javascript:void(0)">Click here to do nothing</a>
            <a href="javascript:void(document.form.submit())">Click here to submit the form</a>
        
/* In Operator: 
        Syntax:*/
             propNameOrNumber in objectName
                  /*  propNameOrNumber is a string, numeric, or symbol expression representing a 
                    property name or array index, and objectName is the name of an object. */
            // Arrays
            var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
            0 in trees;        // returns true
            3 in trees;        // returns true
            6 in trees;        // returns false
            'bay' in trees;    // returns false (you must specify the index number,
                               // not the value at that index)
            'length' in trees; // returns true (length is an Array property)

            // built-in objects
            'PI' in Math;          // returns true
            var myString = new String('coral');
            'length' in myString;  // returns true

            // Custom objects
            var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
            'make' in mycar;  // returns true
            'model' in mycar; // returns true

/*instanceof :Returns true if the specified object is of the specified object type.
            Syntax: */
            objectName instanceof objectType
            /* objectName is the name of the object to 
               compare to objectType, and objectType is an object type, such as Date or Array.
               Use instanceof when you need to confirm the type of an object at runtime
               For example:*/
               var theDay = new Date(1995, 12, 17);
               if (theDay instanceof Date) { //true
                 // statements to execute
                }

/*Operator precedence
            Operator type	                                        Individual operators
            member	                                                        . []
            call / create instance	                                        () new
            negation/increment	                                ! ~ - + ++ -- typeof void delete
            multiply/divide	                                                * / %
            addition/subtraction	                                        + -
            bitwise shift	                                              << >> >>>
            relational	                                                < <= > >= in instanceof
            equality	                                                    == != === !==
            bitwise-and	                                                        &
            bitwise-xor	                                                        ^
            bitwise-or	                                                        |
            logical-and	                                                        &&
            logical-or	                                                        ||
            conditional	                                                        ?:
            assignment	                                    = += -= *= /= %= <<= >>= >>>= &= ^= |=
            comma	                                                            ,
*/
