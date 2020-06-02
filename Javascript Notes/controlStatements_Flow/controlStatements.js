/*
Conditional Statements can be categorized into two types:
    1. If-Else: Block statements of the if block is executed if the condition evaluates to true,
                    otherwise the block statements of the else block is executed.For example: */
            if(x=="ABC"){
                console.log("Equal")
            }
            else{
                console.log("Not Equal")
            }
//Note:
        var b = new Boolean(false); /* Here b is boolean object and not a boolean value.Hence,
                                        if condition is not executed in case 1 but executed in case 2.*/
    //Find the output of the below scenario:
    //  1. 
          if(b){
            console.log("b exists"); //No output
        }
    //  2. 
          if(b==true){
              console.log("condition satisfies"); //condition satisfies
          }
    
    // *** False Values=========> 0,null,undefined,NaN,""(empty string),false

/* 2. Switch: */
function switchCase(locName){
  
    switch(locName){
      case "BNGLR":{
        console.log("I am at bangalore");
        console.log("lockdown is ending soon");
        break;
      }
      case "CHENNAI":{
        console.log("CHENNAI is hot");
        console.log("will see the lockdown");
        break;
      }
      default:{
        console.log("HELLO");
        console.log("WORLD");
      }
      case "KUMAR":{
        console.log("KUMAR");
        console.log("KUMAR1");
        break;
      }
    }
  }
  
  switchCase("KUMAR2");
  /* On missing the break statement all the statements will be executed post the default(in case of no
    match of condition) or the condition where it matches down.*/