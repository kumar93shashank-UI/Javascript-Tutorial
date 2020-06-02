/*For Loop: */
for(let i=0;i<10;i++){
    console.log("value of index is ",i);
}
/*While Loop: */
let i=0;
while(i<10){
    console.log("value of index is ",i);
    i++;
}
/*Do-while Loop: */
let i=0;
do{
    console.log("value of index is ",i);
    i++;
}while(i<10)
/*For Loop: */
for(let i0;i<10;i++){
    console.log("value of index is ",i);
}

/* Break Statements: When used without label,break terminates the innermost enclosing
            loop or switch immediately and transfers the control to the following statements.
            When used with the label,it terminates the specified labeled statement.*/
            
            //Case 1(without label):
            for (let i = 0; i < a.length; i++) {
                if (a[i] === 5) {
                  break;
                }
              }
            //Case 2(with label):
            let x = 0;
            let z = 0;
            labelCancelLoops: while (true) {
              console.log('Outer loops: ' + x);
              x += 1;
              z = 1;
              while (true) {
                console.log('Inner loops: ' + z);
                z += 1;
                if (z === 10 && x === 10) {
                  break labelCancelLoops;
                } else if (z === 10) {
                  break;
                }
              }
            }
/* For..in statement: Iterates over the object's properties and returns the string that lists the 
                      property names and their values.For example:*/
            forInLoop=(obj)=>{
                for(let prop in obj){
                  console.log("prop is",prop);
                }
            }
            let nameObj={
                name:"Work",
                loc:"BNGLR"
            }
            forInLoop(nameObj); 
          /* Output: prop is name
                     prop is loc*/

    /* In case of the array it returns the indices of the elements or the  name of 
        user-defined properties.For example: */
            //Case 1(Index return):
            let nameArr=["BNGLR","CHENNAI","HYD"];
            for(let name in nameArr){
              console.log(name);        
            }
            /* Output : 0
                        1
                        2
            */
            //Case 2(Properties return):
            let locArray=[];
            locArray["India"]="Bangalore";
            locArray["Afghanistan"]="Kabul";
            locArray["Bengaluru"]="UrbanVault";
            for(let location in locArray){
              console.log(location);        
            }
            /* Output : India
                        Afghanistan
                        Bengaluru
            */

/*For..of statement: Iterates over the iterable objects like Arrays,map,arguments objects  and 
                      returns the string that lists the property values.For example:*/
            
            /* In case of the array it returns the value, at the indices of the elements */
                    //Case 1(Index return):
                    let nameArr=["BNGLR","CHENNAI","HYD"];
                      for(let name of nameArr){
                        console.log(name);        
                      }
                    /* Output : BNGLR
                                CHENNAI
                                HYD
                    */
       
          



            
             