/**
 * Promise are a technique for standardizing asynchronous processing in javascript.
 * There are many occasions where a function is called in javascript but actual result are only received 
 * after a period of time.(Example API call, read file from local disk)
 * 
 * Promise callback 
 *  1. resolve
 *  2. reject
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