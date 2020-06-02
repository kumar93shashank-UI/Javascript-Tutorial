/* An expression is any valid unit of code that resolves to a value.

Primary Expressions:
    1. this: Refer to the current object.For example: */
        this['propertyName']
        this.propertyName
    /*2. Grouping Operator.i.e ()                                           */

/* Left Hand side Expressions:
        1. new() :  Used to create an instance of a user-defined object type or of one of the 
                    built-in object types.
                    Syntax:     */
                    var objectName = new objectType([param1, param2, ..., paramN]);
                    /* Example:*/
                        var Shashank= new String("Kumar","Bangalore")
                    /*Output */
                            String {"Kumar"}
                            0: "K"
                            1: "u"
                            2: "m"
                            3: "a"
                            4: "r"
    /*
        2.super(): Used to call the functions on parent's object.Useful with the classes to call
                    parent's constructor.
                    Syntax:             */
                        super([arguments]); // calls the parent constructor.
                        super.functionOnParent([arguments]);
    
    /*  
        3. Spread Operator: Allows an expression to be expanded in places where multiple 
                arguments are expected. For example: */
                    var parts = ['shoulders', 'knees'];
                    var lyrics = ['head', ...parts, 'and', 'toes'];
                    console.log("lyrics::",lyrics); //['head','shoulders', 'knees','and', 'toes']

                    function f(x, y, z) { }
                    var args = [0, 1, 2];
                    f(...args);