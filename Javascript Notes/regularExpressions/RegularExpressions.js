/* Regular Expressions are characters used to match character combination in 
    strings.In JS, regular expressions can be objects as well.These patterns are
        - used with following methods of RegExp   */
                /* a. exec()
                   b. test()
                */
/* or - used with following methods of strings  
                   a. match()
                   b. matchAll()
                   c. replace()
                   d. replaceAll()
                   e. search()
                   f. split()
*/

/* Please note that below two things are same */
        let re = /abc/ <===> let re = new RegExp('abc');
/* Creating a Regular Expression Pattern: */
    //   -  Simple Pattern: For example:
                let re = /abc/
                let str1 = "Hi, do you know your abc's?"
                let str2 = "The latest airplane designs evolved from slabcraft."
                let str3 = "Grab crab"
                console.log(str1.search(re));  //   21           
                console.log(str2.search(re));  //   43           
                console.log(str3.search(re));  //   -1            

    //  - Using special characters: For example ----
                