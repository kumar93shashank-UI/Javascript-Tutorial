/* Array: Generally,refer to collection of similar collection of items.*/

/* Creating Array*/
    let arr1 = new Array(10);
    let arr2 = [1,2,3,4,5];
    arr3.length = 10;

/*Populating an array */
    let myArray = new Array('Hello', myVar, 3.14159)
    
    let arr = []
    arr[3.4] = 'Oranges'
    console.log(arr.length)                 // 0
    console.log(arr.hasOwnProperty(3.4))

/* Referring Array elements  :Using indexes or the enumerable property names */
    arr[2]          // three
    let arr = []
    arr[3.4] = 'Oranges'
    console.log(arr[3.4]); //Oranges

/*Understanding Length */
    let cats = ['Dusty', 'Misty', 'Twiggy']
    console.log(cats.length)  // 3

    cats.length = 2
    console.log(cats)  // logs "Dusty, Misty" - Twiggy has been removed

    cats.length = 0 
    console.log(cats)  // logs []; the cats array is empty

    cats.length = 3 
    console.log(cats)   //[empty × 3]

/*Iteration Over Arrays:
    forEach Loop: Executed over each element of the array.For example: */
        let array = ['first', 'second', , 'fourth']

        array.forEach(function(element) {
          console.log(element)
        })
        // first
        // second
        // fourth

// Unassigned values are not iterated in a forEach loop.for that we have to manually assign it undefined.
        let array = ['first', 'second',undefined, 'fourth']

        array.forEach(function(element) {
          console.log(element)
        })
        // first
        // second
        // undefined
        // fourth

/*Array Methods and their sampe examples */

    // 1. Join:
            let myArray = new Array('Wind', 'Rain', 'Fire')
            myArray.join("--"); //Wind--Rain--Fire
    
    // 2. Push:
            let myArray = new Array('Wind', 'Rain', 'Fire')
            myArray.push("--"); //[Wind,Rain,Fire,--]

    // 3. Pop:
            let myArray = new Array('Wind', 'Rain', 'Fire')
            let poppedElement=myArray.pop("--");
            console.log(poppedElement);//"--""
            console.log(myArray); //[Wind,Rain,Fire]

            myArray.push("--"); //[Wind,Rain,Fire,--]
            let poppedElement2 =Array.pop("Rain") // --
            console.log(poppedElement2);//"--""
            console.log(myArray); //[Wind,Rain,Fire,--]
    // 4. Shift: Removes the element from beginning.
            let myArray = new Array('1', '2', '3')
            let first = myArray.shift();//1
            console.log(myArray);//["2","3"]
    // 5. unshift(): Push the elements from beginning.
            let myArray = new Array('1', '2', '3')
            myArray.unshift('4', '5')
            // myArray becomes ["4", "5", "1", "2", "3"]
    //6.   slice(): Extracts from the array and doesn't modify the original array.
            let myArray = new Array('a', 'b', 'c', 'd', 'e')
            console.log(myArray.slice(2,4)); //['c','d']
            console.log(myArray) // ['a', 'b', 'c', 'd', 'e'];
    //7.   splice(): Extracts from the array,replaces them and modifies the original array.
        //     Syntax: splice(index, count_to_remove, addElement1, addElement2, ...)
            let myArray = new Array('a', 'b', 'c', 'd', 'e')
            console.log(myArray.splice(2,4)); //['c','d']
            console.log(myArray) // ['a', 'b'];

            let myArray2 = new Array('1', '2', '3', '4', '5')
            myArray2.splice(1, 3, 'a', 'b', 'c', 'd');
            console.log(myArray2);  //["1", "a", "b", "c", "d", "5"]
    
    //8.   reverse(): transposes the elements of array.
            let myArray = new Array('1', '2', '3')
            myArray.reverse() //[3,2,1]

    //9.   sort(): sorts the elements in place and returns reference to the array.
                let myArray = new Array('Wind', 'Rain', 'Fire')
                console.log(myArray.sort());//["Fire", "Rain", "Wind"]
                let sortFn = function(a,b){
                    if(a[a.length-1]<b[b.length-1]) return -1;
                    if(a[a.length-1]>b[b.length-1]) return 1;
                    if(a[a.length-1]==b[b.length-1]) return 0;
            }
                myArray.sort(sortFn); // ["Wind","Fire","Rain"]

     //10.   indexOf(): searches the element and returns the index of first match.
                let myArray = new Array('a', 'b', 'c', 'b' , 'd' , 'e' , 'b' , 'a' );
                console.log(myArray.indexOf('b')) //1
                console.log(myArray.indexOf('b', 2)) //3


     //11.   lastIndexOf(): searches the element and returns the index of last match.
                let myArray = new Array('a', 'b', 'c', 'b' , 'd' , 'e' , 'b' , 'a' );
                console.log(myArray.lastIndexOf('b')) //6
                console.log(myArray.lastIndexOf('b', 2)) //1
                console.log(myArray.lastIndexOf('b', 4)) //3
                console.log(myArray.lastIndexOf('b', 3)) //3       
     //12.   forEach(): iterates over each element and returns undefined.
                let a = ['a', 'b', 'c']
                a.forEach((element)=> console.log(element+"1")) 
                /*      'a1'
                        'b1'
                        'c1'
                */

     //14.   map(): returns a new array after iterating over each element.
                let a = ['a', 'b', 'c']
                let a2=a.map((element)=> {return element+"1"}) 
                console.log(a2)//['a1', 'b1', 'c1']

     //14.   every(): returns true if callback returns true for every item in array.
                function isNumber(value){
                        return typeof value==='number';
                }
                let a1 = [1,2,3];
                console.log(a1.every(isNumber))//true
                let a2 = [1,"asd",3];
                console.log(a2.every(isNumber))//false           


     //14.   some(): returns true if callback returns true for every item in array
                function isNumber(value){
                        return typeof value==='number';
                }
                let a1 = [1,2,3];
                console.log(a1.some(isNumber))//true
                let a2 = [1,"asd",3];
                console.log(a2.some(isNumber))//true
                let a3 = ["1","2","3"];
                console.log(a3.some(isNumber))//false

     //14.   reduce():