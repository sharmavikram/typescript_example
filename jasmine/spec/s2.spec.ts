/**
 * Test start-up and tear down-approach
 * jasmine provides a mechanism to define a function that will run before and after each test 
 * Note:- there is no tsconfig file to compile .ts file 
 * we need to first run ts s2.spec.ts 
 * affect that jasmine s2.spec.js
 */


 describe("Before each and after each function",() =>{
    let myString: string;
    beforeEach(()=>{
        myString = "Test string";
    })

    afterEach(()=>{
        expect(myString).toContain("s");
    });

    it("should find and clear the my string variable", ()=>{
        expect(myString).toEqual("Test string");
    });
 });
