/* Promise is an object representing the eventual completion or failure of an
asynchronous event. 
A promise is returned object to which we can attach the callback functions,instead
of passing the callbacks to a function */

/* Sample Code using Callback */

function successCallBack(result){
    return (" Created successfully "+ result);
}
function failureCallBack(result){
    return (" Failed!!!"+ result);
}

createdAudioFileSync(audioSettings,successCallBack,failureCallBack);

/* Simplify Code using Promises */

createdAudioFileSync(audioSettings).then(successCallBack,failureCallBack)

/* Guarantees:
    - Callbacks will never be called without the completion of the current run 
        of the Javascript Loop.
    - Callbacks added with then() even after the success or failure of the 
        asynchronous operation, will be called, as above.
    - Multiple callbacks can be added by calling then() several times.Each callback
        is executed one after the another in which they are inserted.
*/

/* Promise Chaining:
Chaining comes into picture when we try to execute another asynchronous call 
after the completion of first asycnhronous call.So,basically what I mean
to say is the consecutive asychnonous calls happen with one at a time.

Earlier this chaining used to be done using callbacks and it looked something 
like this:-- */
    doSomething(function(result){
        doSomethingElse(result,function(newResult){
            doThirdThing(result,function(finalResult){
                console.log("Got the final result: ",finalResult)
            },failureCallBack)
        },failureCallBack)
    },failureCallBack)

/* Using the modern promises we can implement it like ----- */
    doSomething().then(function(result){
        return doSomethingElse(result)
    }).then(function(newResult){
        return doThirdThing(newResult)
    }).then(function(finalResult){
        console.log("Got the final Result : ",finalResult)
    })
    .catch(failureCallBack)

/* Please make sure to return the results otherwise callback won't catch the 
    response of results of previous promises */
/* .catch(failurecallBack) is shorthand for .then(null,failueCallBack) */

/* The same can be implemented using arrow function */

    doSomething()
    .then(result=>doSomethingElse(result))
    .then(newResult=>doThirdThing(newResult))
    .then(finalResult=>console.log("Got the final result: ", finalResult))
    .catch(failureCallBack)

/*Chaining after catch: It is possible to chain after a failure i.e  a catch
which is useful to accompolish new actions even after an action failed in chain
For example:     */
    new Promise((resolve,reject)=>{
        console.log("Iniital")
        resolve();
    })
    .then(()=>{
        throw new Error('Something failed');
        console.log('Do this');
    })
    .catch(()=>{
        console.error("Error Ocuured!!!!");
    })
    .then(()=>{
        console.log("This will be executed no matter what happens!!")
    })

/* Output :
    Initial
    Error Occured
    This will be executed no matter what happens!!
*/

/* Error Propagation : If there is an exception the browser will look down for 
    .catch() handlers or onRejected & is modeled after how synchronous code works.
    For example:
*/
    try{
        const result        =       syncDoSomething();
        const newResult     =       syncDoSomethingElse(result);
        const finalResult   =       syncDoThirdThing(newResult);
        console.log("Got the final Result: ",finalResult);
    }
    catch(error){
        failureCallBack(error);
    }
/* The same thing can be done using async/await in ES2017 as --- */
    async function foo(){
        try{
            const result        =       await doSomething();
            const newResult     =       await doSomethingElse();
            const finalResult   =       await doThirdThing();
            console.log("Got the final result: ", finalResult);
        }
        catch(error){
            failureCallBack(error);
        }
    }

/*  Promise Rejection Events:Whenever a promise is rejected one of the two events
        is sent to the global scope.The two events are:
        - rejectionhandled  : sent when a promise is rejected, after that
            rejection has been handled by the executor's reject function
        -unhandledrejection : sent when a promise is rejected but there is 
            no rejection handler available.

    In both cases, the event (of type PromiseRejectionEvent) has as
    members a promise property indicating the promise that was rejected, 
    and a reason property that provides the reason given for the promise to 
    be rejected.

    Hence,this helps us in the debugging the issue.One special usefulness:
        when writing code for Node.js it's common to include the packages in 
        the project that may have unhandled rejected promises.Those get logged 
        to the console by Node runtime.We can capture these for analysis 
        or avoid them cluttering the output using eventListener.
*/
    window.addEventListener("unhandledrejection",event=>{
        /* Add your code for rejection */
        event.preventDefault();
    },false)

/* Creating a Promise around an old callback API 

    In ideal world, all asynchronous functions would return a promises.However,
    some old APIs still expect to pass the success/failure callbacks in the old 
    way.The most obvious example is "setTimeOut()" function.

    setTimeOut(()=>saySomething("10 seconds passed"),10*1000);

    Interesting thing here is ,that if the saySomething function fails there is
    nothing there to catch it.setTimeOut needs to blame for this.

    To handle issues like this, we need to create promises at the root level. */
    const wait = ms => new Promise(resolve =>setTimeOut(resolve,ms));
    wait(10*1000).then(()=>saySomething("10 seconds passed"))
        .catch(error=>console.log("Error Occured",error));

/*  the promise constructor takes an executor function that lets us resolve or 
    reject a promise manually. Since TimeOut doesn't really fail,we left out 
    reject in this case */

/* Timing: Examples---- */ 

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    wait().then(() => console.log(4));
    Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
    console.log(1); // 1,2,3,4

/*  Nesting of Promises: Examples---- */

    doSomethingCritical()
    .then(result => doSomethingOptional(result)
      .then(optionalResult => doSomethingExtraNice(optionalResult))
      .catch(e => {})) // Ignore if optional stuff fails; proceed.
    .then(() => moreCriticalStuff())
    .catch(e => console.error("Critical failure: " + e.message));

/* Common Mistakes:  Spot mistakes in below example---- */ 

    doSomething().then(function(result) {
        doSomethingElse(result) 
        .then(newResult => doThirdThing(newResult));
    }).then(() => doFourthThing());

    /*  Mistakes are ----
            - things are not chained properly.This happens when we create 
                a new promis but forget to return it as we can see it here.
                Here, doFourthThing will run without waiting for doSomething
                and doSomethingElse to complete.
            -  nesting is done unnecessarily and sometimes it leads to 
                 uncaught errors.
            -  promises are not terminated with catch statement.
    */
   
    /* The proper solution will look something like ---- */
        doSomething()
        .then(function(result){
            return doSomethingElse(result)
        })
        .then(function(newResult){
            return doThirdThing(newResult)
        })
        .then(function(){
            return doFourthThing()
        })
        .catch(function(error){
            console.log("ERROR!!!!!!",error)
        })

/* When promises and tasks collide ---- Yet to discuss */
/* Composition ---- Yet to discuss */