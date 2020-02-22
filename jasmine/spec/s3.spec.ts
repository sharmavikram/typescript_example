/**
 * Forcing test
 * ===============
 * it is necessary at development time to limit the run of an entire test suite down to one
 * specific test, or to one specific suite of tests. this is generally to find the cause of a 
 * specific failure, or to focus on a single suite of tests during the development of the code.
 */


 fdescribe("this is force suite",()=>{
    it("this is not a force suite",() =>{
        expect(true).toBeFalsy("true");
    });
    fit("this is force suite",()=>{
        expect(true).toBeTrue();
    });
 });