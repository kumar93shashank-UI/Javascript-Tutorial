'\xA9' // "©"               --------> Hexadecimal Escape Sequence
'\u00A9' // "©"             --------> Unicode Escape Sequence

/*  Methods of String */

/* charAt(): Returns single character at the specified index. If no index is there or index can't
             be converted to integer,default is taken as 0 and hence the first character is returned.
             If the index is out of range, an empty string is returned.
             Sample Example: */
                var name="Shashank";
                console.log(name.charAt()); //S
                console.log(name.charAt(name.length-1)) //k

/* charCodeAt(): Returns integer between 0 to 65535. If no index is there or index can't
             be converted to integer,it defaults to 0.
             If the index is out of range, NaN is returned.
             Sample Example: */
             var name="Shashank";
             console.log(name.charCodeAt()); //83(ASCII value of S)
             console.log(name.charAt(name.length-1)) //107 (ASCII value of k)

/*indexOf(): Returns the index of the element for the very first time.
             Sample Example: */
             var name="Shashank"
             name.indexOf(); //-1
             name.indexOf("S");  // 0           
             var name1="SahasahSnk";
             name.indexOf("S")  //  0
/*lastIndexOf(): Returns the index of the element for the last occurence.
             Sample Example: */
             var name="Shashank"
             name.lastIndexOf(); //-1
             name.lastIndexOf("S");  // 0           
             var name1="SahasahSnk";
             name.lastIndexOf("S")  //  7

/*startsWith: 
    Syntax: */
        str.startsWith(searchString[, position]) //position is optional parameter
        // Sample Examples:
            const str1 = 'Sat night plans';
            console.log(str1.startsWith('Sat')); //true
            console.log(str1.startsWith('Sat',3)); //false
            console.log(str1.startsWith('night',3)); //true
            console.log(str1.startsWith('nug')); //false
            console.log(str1.startsWith('Sat night')); //true

/*endsWith:
    Syntax: */
        str.endsWith(searchString[, length]) //position is optional parameter
        // Sample Examples:
            const str1 = 'Sat night plans';
            console.log(str1.endsWith('plan')); //false
            console.log(str1.endsWith('plans')); //true
            console.log(str1.endsWith('night',9)); //true

/*includes():
    Syntax: */
        str.includes(searchString[, position])            
        // Sample Examples:
        const str1 = 'Sat night plans';
        console.log(str1.includes('plan')); //true
        console.log(str1.includes('plans')); //true
        console.log(str1.includes('night',4)); //true

/* concat():
    Syntax: */
        str.concat(str2 [, ...strN])
        // Sample Examples:
        str1 = "Hello";

        console.log(str1.concat(' ',"plan")); //Hello plan
        console.log(str1.concat(' ',"plan"," party")); //Hello plan party
        
        let greetList = ['Hello', ' ', 'Venkat', '!']
        "".concat(...greetList)  // "Hello Venkat!"

        "".concat({})    // [object Object]
        "".concat([])    // ""
        "".concat(null)  // "null"
        "".concat(true)  // "true"
        "".concat(4, 5)  // "45"

/*Split():
    Syntax: */
        str.split([separator[, limit]])
        // Sample Examples:
        str1 = "Hello World Shashank";

        console.log(str1.split(""));//["H","e","l","l","o"," ","w","o","r","l","d"," ","S","h","a","s","h","a","n","k"]
        console.log(str1.split(" ",2)); //["Hello", "World"]

/* slice():
    Syntax: */
        str.slice(beginIndex[, endIndex]) //endIndex is optional
        // Sample Examples:
        let str1 = 'The morning is upon us.', // the length of str1 is 23.
        str2 = str1.slice(1, 8), //he morn
        str3 = str1.slice(4, -2), // morning is upon u
        str4 = str1.slice(12), // is upon us.
        str5 = str1.slice(30); //The morning is upon us.
        console.log(str);//The morning is upon us.
        console.log(str.slice(-11, 16)) // is u
        console.log(str.slice(11, -7))  // is u
        console.log(str.slice(-5, -1))  // n us 
        //It doesn't modify the original string
/* slice():
    Syntax: */
    str.substring(startIndex[, endIndex]) //endIndex is optional and is always excluded.
    // Sample Examples:
        let anyString = 'Mozilla'
        console.log(anyString.substring(0, 1)) //   M
        console.log(anyString.substring(1, 0)) //   M
        console.log(anyString.substring(0, 6))  //  Mozill
        console.log(anyString.substring(4))     //  lla
        console.log(anyString.substring(4, 7))  //  lla
        console.log(anyString.substring(7, 4))  //  lla
        console.log(anyString.substring(0, 7))  // Mozilla
        console.log(anyString.substring(0, 10)) // Mozilla

/* toLowerCase() and toUpperCase():
    Syntax: */
    str.toLowerCase() || str.toUpperCase() 
    // Sample Examples:
        let anyString = 'MOZIlla'
        console.log(anyString.toLowerCase()); //   mozilla
        console.log(anyString.toUpperCase()); //   MOZILLA

/* normalize():  returns Unicode Normalization Form of the string.
    Syntax: */
    str.normalize([form])
    // Sample Examples:
        const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
        const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

        console.log(`${name1}, ${name2}`);
        // expected output: "Amélie, Amélie"
        console.log(name1 === name2);
        // expected output: false
        console.log(name1.length === name2.length);
        // expected output: false

        const name1NFC = name1.normalize('NFC');
        const name2NFC = name2.normalize('NFC');

        console.log(`${name1NFC}, ${name2NFC}`);
        // expected output: "Amélie, Amélie"
        console.log(name1NFC === name2NFC);
        // expected output: true
        console.log(name1NFC.length === name2NFC.length);
        // expected output: true
    
/* repeat():  returns a new string which contains the specified number of copies
                of the string on which it was called, concatenated together.
    Syntax: */
    str.repeat(count)
    // Sample Examples:
        console.log('abc'.repeat(2)); //abcabc
        console.log('abc'.repeat(0)); //"" 
        console.log('abc'.repeat(1)); //abc
        console.log('abc'.repeat(-1)); //RangeError
        console.log('abc'.repeat(4.5/2)); //abcabc
        console.log('abc'.repeat(1/0)); //RangeError

/* trim():  returns a new string after removing the leading and trailing spaces from the string.
    Syntax: */
    str.trim()
    // Sample Examples:
        console.log('          !abc        '.trim()); //    !abc
        var orig = 'foo    ';
        console.log(orig.trim()); // 'foo'

/*Embedded Expressions:*/ 
    const five = 5;
    const ten = 10;
    console.log('Fifteen is ' + (five + ten) + ' and not ' + (2 * five + ten) + '.');

/*Multi-lines: */
    console.log('string text line 1\n\
    string text line 2');
    // "string text line 1
    // string text line 2"


// Need to discuss more on this
/* Collation: Useful for comparing and sorting strings */