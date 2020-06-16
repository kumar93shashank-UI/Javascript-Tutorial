/* All objects are inherited from at least one object.The object from which it
    is inherited is known as prototype. The inherited properties can be 
    found in the prototype object of the constructor */

/* Defining properties of Object Type:
     We can add the property to previously defined object by using the prototype 
     property.This defines a property which is being shared by all the objects 
     of the specified type and not only one.
*/
    let Car = {
        name : "HONDA CITY",
        company: "HONDA"
    };
    Car.prototype.color = null;
    car1.color = 'black';
