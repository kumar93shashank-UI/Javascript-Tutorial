/* An object is a standalone entity with properties and type like any 
    physical object.
    For example:
*/
    let car = {
        name:"Ferrari",
        engine: "4.5-Liter V8",
        horsePower: "562 hp",
        Torque: "398 lb-ft",
        topSpeed: "210 mph",
        Transmission: "7-Speed Dual Clutch"
    }
//The above example can be written as ----
    let car = new Object();
    car.name = "Ferrari";
    car.engine = "4.5-Liter V8";
    car.horsePower = "562 hp";
    car.Torque = "398 lb-ft";
    car.topSpeed = "210 mph";
    car.Transmission = "7-Speed Dual Clutch"

//Unassigned properties are initialized as undefined and not null.
    console.log(car.driver) // undefined

/* Objects are sometimes called associative arrays, since each 
    property is associated with a string value that can be used to access it. 
    So we can basically access the properties of object like how 
    we used to access the elements from array.For example: 
*/
    car["name"]         = "Ferrari";
    car["engine"]       = "4.5-Liter V8";
    car["horsePower"]   = "562 hp";
    car["Torque"]       = "398 lb-ft";
    car["topSpeed"]     = "210 mph";
    car["Transmission"] = "7-Speed Dual Clutch"

   
    var myObj = new Object(),
    str = 'myString',
    rand = Math.floor(Math.random()*10),
    obj = new Object();

    myObj.type              = 'Dot syntax';
    myObj['date created']   = 'String with space';
    myObj[str]              = 'String value';
    myObj[rand]             = 'Random Number';
    myObj[obj]              = 'Object';
    myObj['']               = 'Even an empty string';
    
    console.log(myObj);

/* Output :
      "": "Even an empty string"
      4: "Random Number"
      [object Object]: "Object"
      date created: "String with space"
      myString: "String value"
      type: "Dot syntax"
*/
    /* All the keys in the square bracket notation are converted to string
        unless they are symbols.Javascript property names can only be 
        strings or symbols(at some point we may need to add private names but
        that can't be used with [] form).For example, in the above code, 
        when the key obj is added to the myObj, JavaScript will call 
        the obj.toString() method, and use this result string as the new key.
    */

/* We can use for...in loop to iterate over all the ennumerable properties 
    of object.For example: */
        var car = {
            name : "HONDA CITY",
            loc:"BANGALORE",
            registeredTo : "Shashank"
        }
        function showProps(obj,ObjName){
            let result = ""; 
            for( let prop in obj){
                result += `${ObjName}.${prop} = ${obj[prop]} \n`
            }
            return result;
        }
        showProps(car,"CAR");

        /* Output :
                CAR.name = "HONDA CITY"
                CAR.loc  = "BANGALORE"
                CAR.registeredTo = "Shashank"
        */

/* Enumerate the properties of an object */
    /*  - for...in loops :  Traverses all enumerable properties of an object 
            and its prototype chain */
    
    /* Object.keys(o)   :   Returns an array with all the own (not in the prototype
            chain) enumerable properties' names ("keys") of an object o.
            For example: */
                 var car = {
                    name : "HONDA CITY",
                    loc:"BANGALORE",
                    registeredTo : "Shashank"
                }
                console.log(Object.keys(car)) //["name", "loc", "registeredTo"]
    
    /* Object.getOwnPropertyNames(o) :  returns an array containing all own 
            properties' names (enumerable or not) of an object o.
            For example: */
             var car = {
                name : "HONDA CITY",
                loc:"BANGALORE",
                registeredTo : "Shashank"
            }
            console.log(Object.getOwnPropertyNames(car)) //["name", "loc", "registeredTo"]

    /* Before ES5 there was no way to list all the properties of an object.
            Now,it can be achieved using following function */
            function listAllProperties(o) {
                var objectToInspect;     
                var result = [];
                
                for(objectToInspect = o; objectToInspect !== null; 
                       objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
                    result = result.concat(
                        Object.getOwnPropertyNames(objectToInspect)
                    );  
                }
                
                return result; 
            }
            listAllProperties(car);

            /* Output :
            ["name", "loc", "registeredTo", "constructor",
             "__defineGetter__", "__defineSetter__", "hasOwnProperty",
             "__lookupGetter__", "__lookupSetter__", "isPrototypeOf",
             "propertyIsEnumerable", "toString", "valueOf", "__proto__",
             "toLocaleString"]
            */

/* Create new Objects */
    /* Method 1: Using Object Initializers  */
            var obj = {
                property1: value1,
                property2: value2,
            /*  .
                .
                .
                .
            */
                propertyN:valueN

            }
    /* Method 2: Using constructor function */
            function Car(make,model,year,owner){
                this.make   =   make;
                this.model  =   model;
                this.year   =   year;
                this.owner  =   owner;
            }
            function personDetails(fName,lName,location){
                this.fName      =    fName;
                this.lName      =    lName;
                this.location   =    location;
            }
            var Shashank = new personDetails("Shashank","Kumar","Bangalore");
            var Popeye   = new personDetails("Shashank","Srivastava","Lucknow");

    /* Using Object.Create() method: */
            var Animal = {
                    type: "Invertebraes",
                    display : function(){
                        console.log(this.type);
                    }
            }
            var Fish = Object.create(Animal);
            Fish.type="fishes";
            Fish.display(); // fishes

            var Elephant = Object.create(Animal);
            Elephant.display(); //Invertebraes

    /* All objects are inherited from at least one object.The object from which it
    is inherited is known as prototype. The inherited properties can be 
    found in the prototype object of the constructor */

/* Defining Methods:
        Method: Function associated with an object.Methods are defined the way 
            the normal functions are defined.
            Syntax: ObjName.methodName = functionName;
*/
            var myObj = {
                display:function(name){
                    console.log("Name is ", name);
                }
            }
            myObj.display("Shashank"); //Name is Shashank
        
/* Using this for Object References: 
            this refers to the object that is in.
*/
        const Engineer = {
            name: "John",
            age: 27,
            job: "Software Engineer"
        }
        const Manager = {
            name:"Shashank",
            age:29,
            job:"Engineering Manager"
        }
        function sayHi(){
            console.log("Hi My name is ",this.name)
        };
        Engineer.Hi =   sayHi;
        Manager.Hi  =   sayHi;        
        console.log(Engineer.Hi()) // Hi My name is John
        console.log(Manager.Hi()) //Hi My name is Shashank
        //Other way to display this is ----
        console.log(sayHi.call(Engineer,this)) // Hi My name is John
        console.log(sayHi.call(Manager,this)) // Hi My name is Shashank

/* Defining Getters and Setters:
        Getter is method which is used to get the value of specific property.
        Setter is method which is used to set the value of specific property.
        Getters and setters can be either
            - defined using object initializers, or
            - added later to any object at any time using getter or setter 
                adding method.
        While defining the getter and setter using Object initializer prefix a 
        getter by get and setter by set */

var o = {
    a:7,
    get b(){
        return this.a +1;
    },
    set c(){
        return this.a;
    }
}

    /* Getters and setters can also be added to an object at any time after creation using the Object.defineProperties 
        method as shown below: */
            var o = { a:7 };
            
            Object.defineProperties(o,{
                'b': {get:function(){
                    return this.a + 1;
                }},
                'c':{set:function(x){
                    this.a = x/2
                }}
            })

            o.c = 10;
            console.log(o.b) // 6;
            
            //The above form shows the dynamic nature of Javascript.
    
/*Deleting Properties: We can remove the non-inherited property by using the delete property. */
            var myObj = {
                a:10,
                b:12
            }
            console.log('a' in myObj); //true
            delete myObj.a;
            console.log('a' in myObj); //false
            console.log(obj.a); //undefined

    /* We can also use delete to delete a global variable if the var/let/const keyword was not used to declare
           the variable.For example: */
           const b2=11;
           console.log(b2); // 11
           delete b2;
           console.log(b2); // 11
           
           b3 = 12;
           console.log(b3); // 12
           delete b3;
           console.log(b3); // "ReferenceError: b3 is not defined

/*Comparing the Objects:
    Two objects are same only when they same reference and never else. For example: */
            
            var fruit = {name: 'apple'};
            var fruitbear = {name: 'apple'};

            fruit == fruitbear; // return false
            fruit === fruitbear; // return false


            var fruit = {name: 'apple'};
            var fruitbear = fruit;  // Assign fruit object reference to fruitbear

            fruit == fruitbear; // return true
            fruit === fruitbear; // return true

            fruit.name = 'grape';
            console.log(fruitbear); // { name: "grape" }
           