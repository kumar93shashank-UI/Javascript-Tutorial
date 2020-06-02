/* Used to represent:
        1.  Integer
        2.  Floating Point Numbers
        3.  +Infinity
        4.  -Infinity
        5.  NaN
        6. BigInt(recently added)
    
    We can't mix and match BigInt and number values in the same operation and can't use the Math
    with BigInt values.We can use four type of number literals:
        a. Decimal Numbers
    /*  b. Binary Numbers(Starts with 0B/0b). eg: */
                    var x = 0B0101001011011010
                    console.log(x); // 21210
            /* If the digits after the 0b are not 0 or 1,
                 the following SyntaxError is thrown: "Missing binary digits after 0b". */
    /*  c. Octal Numbers(Starts with 0o).   */
                    var y = 0o123456 
                    console.log(y) //42798
    /*  d  Hexadecimal Numbers(Starts with 0X/0x) e.g. */
                    var z = 0X123456789
                    console.log(z);// 4886718345
            /*  If the digits after 0x are outside the range (0123456789ABCDEF),  
                the following SyntaxError is thrown: "Identifier starts immediately 
                after numeric literal".*/

/*Exponentiation:Examples:
    1E3 ========> 1000
    2E6 ========> 2000000
    0.1e2=======> 10 
*/

/* Number Object:   
    The built-in Number object has properties for numerical constants such as maximum-value etc.
    We can't play with this according to our convenience. Below are the properties defined.
    
        Properties of Number: */
        Property	                                               Description
    Number.MAX_VALUE	                    The largest representable number (±1.7976931348623157e+308)
    Number.MIN_VALUE	                    The smallest representable number (±5e-324)
    Number.NaN	                            Special "not a number" value
    Number.NEGATIVE_INFINITY	            Special negative infinite value; returned on overflow
    Number.POSITIVE_INFINITY	            Special positive infinite value; returned on overflow
    Number.EPSILON	                        Difference between 1 and the smallest value greater than 1 that can be represented as a Number (2.220446049250313e-16)
    Number.MIN_SAFE_INTEGER	                Minimum safe integer in JavaScript (−253 + 1, or −9007199254740991)
    Number.MAX_SAFE_INTEGER	                Maximum safe integer in JavaScript (+253 − 1, or +9007199254740991)

        /*Methods of Number: */
        Method	                                                    Description
    Number.parseFloat()	                    Parses a string argument and returns a floating point number.
                                            Same as the global parseFloat() function.
    Number.parseInt()	                    Parses a string argument and returns an integer of the specified radix or base.
                                            Same as the global parseInt() function.
    Number.isFinite()	                    Determines whether the passed value is a finite number.
    Number.isInteger()	                    Determines whether the passed value is an integer.
    Number.isNaN()	                        Determines whether the passed value is NaN. More robust version of the original global isNaN().
    Number.isSafeInteger()	                Determines whether the provided value is a number that is a safe integer.


    // Methods of Number.prototype
        Method	                                                     Description
    toExponential()	                        Returns a string representing the number in exponential notation.
    toFixed()	                            Returns a string representing the number in fixed-point notation.
    toPrecision()	                        Returns a string representing the number to a specified precision in fixed-point notation.

    // Methods of Math Object
    Method	                                                         Description
    abs()	                                                       Absolute value
    sin(), cos(), tan()	                    Standard trigonometric functions; with the argument in radians.
    asin(), acos(), atan(), atan2()	        Inverse trigonometric functions; return values in radians.
    sinh(), cosh(), tanh()	                Hyperbolic functions; argument in hyperbolic angle.
    asinh(), acosh(), atanh()	            Inverse hyperbolic functions; return values in hyperbolic angle.
    pow(), exp(), expm1()                   Exponential function
    log10(), log1p(), log2()                logarithmic functions.
    floor(), ceil()	                        Returns the largest/smallest integer less/greater than or equal to an argument.
    min(), max()	                        Returns the minimum or maximum (respectively) value of a comma separated list of numbers as arguments.
    random()	                            Returns a random number between 0 and 1.
    round(), fround(), trunc()              Rounding and truncation functions.
    sqrt(), cbrt(), hypot()	                Square root, cube root, Square root of the sum of square arguments.
    sign()	                                The sign of a number, indicating whether the number is positive, negative or zero.

    