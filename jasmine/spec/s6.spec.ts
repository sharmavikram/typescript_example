/**
 * Spies function
 * s
 * 
 * 
 * pies allows us to test to see whether a particular function was called. also 
 * determine the actual parameters it was called with 
 * 
 * function name: spyOn, callFake
 * call fake function override the return value, basically used for small mocking
 */

 class mySpecifiedClass {
     testFunction(name: string) {
         console.log(name);
     }

     doCallBack(id: number, callback: (result: string)=>void) {
        let callbackId = "id: " + id.toString();
        callback(callbackId);
     }
 }

 class doCallback {
     callbackLog(value: string) {
         console.log(value);
     }
     getValue(): number {
         return 5;
     }
 }
 describe("spy function",()=>{
     it("function should called with params",()=>{
        let t1= new mySpecifiedClass();
        let spy = spyOn(t1, "testFunction");
        t1.testFunction("hello");
        expect(spy).toHaveBeenCalled();
     })
     /**********************spying on callback function *********************/

     it("spying on callback function", ()=>{
        let d1 = new doCallback();
        let t2 = new mySpecifiedClass();
        let cspy = spyOn(d1, "callbackLog");

        t2.doCallBack(1, d1.callbackLog);
        expect(cspy).toHaveBeenCalled();
        expect(cspy).toHaveBeenCalledWith("id: 1");
     });

     /**********************spying using fake function *********************/
     it("fake function",() => {
            let d2 = new doCallback();
            spyOn(d2, "getValue").and.callFake( () => {
                return 2
            })
            expect(d2.getValue()).toBe(2);
     })
 })




