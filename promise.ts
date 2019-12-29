/**
 * Promise are a technique for standardizing asynchronous processing in javascript.
 * There are many occasions where a function is called in javascript but actual result are only received 
 * after a period of time.(Example API call, read file from local disk)
 * 
 * Promise callback 
 *  1. resolve
 *  2. reject
 * 
 * Note: we can pass the message under resolve or reject function
 * resolve(message); reject(errorMessage);
 */

/********************Resolve Example******************************* */
 function delayPromis(): Promise<void> {
    return new Promise<void> (
        (
            resolve: () => void,
            reject: () => void,
        ) => {
            function afterSetTimeOut() {
                   resolve(); 
            }
            setTimeout(afterSetTimeOut, 2000);
        }
    )
 }

 function callDelayPromise() {
     console.log(`calling promise`);
     delayPromis().then(
         () => {
             console.log('call then');
         }
     ) 
 }

 callDelayPromise();


 /**********************Reject Example************************ */

 function errorPromise(): Promise<void> {
     return new Promise<void>(
         (
             resolve: () => void,
             reject: () => void,
         ) => {
             reject();
         }
     )
 }

 function callErrorPromise() {
     console.log('Error Promise');
     errorPromise().then(
         () => {
            console.log(`No Error`);
         }
     ).catch(
         () => {
             console.log(`An error occured`);
         }
     )
 }
 console.log(callErrorPromise());

 /********************Promise example with asnyc and await********************* */

 function awaitDelayed() : Promise<void>{ 
     return new Promise <void> (
         (
             resolve: () => void,
             reject: () => void
         ) => {
             function afterawait() {
                 console.log('calling resolve');
                 resolve();
             }
             setTimeout(afterawait, 1000);
         }
     )
 }

async function callAwait() {
    console.log('call await function');
    await awaitDelayed();
    console.log('after await delayed');
} 
callAwait();

/***********Promise with async and await with error************ */

function awaitErrorDelay() : Promise<void> {
    return new Promise <void> (
        (
            resolve: () => void,
            reject: (error: string) => void,
        ) => {

            function afterWait() {
                console.log('await error called');
                reject('error called');
            }
            setTimeout(afterWait, 1000);
        }
    )
}

async function errorAwaitCalled () {
    console.log('Await error function called')
    try {
        await awaitErrorDelay();
    }
    catch(error) {
        console.log(error);
    }
    console.log('after error called');
}
errorAwaitCalled();