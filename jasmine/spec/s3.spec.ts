/**
 * Forcing test
 * ===============
 * it is necessary at development time to limit the run of an entire test suite down to one
 * specifice test, or to one specific suite of tests. this is generally to find the cause of a 
 * specific failure, or to fouce on a single suite of tests during the development of the code.
 */


 fdescribe("this is fource suite",()=>{
    it("this is not a fource suite",() =>{
        expect(true).toBeFalsy("ture");
    });
    fit("this is fource suite",()=>{
        expect(true).toBeTrue();
    });
 });