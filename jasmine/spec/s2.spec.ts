/**
 * Test start-up and tear down-approach
 * jasmine provides a machinism to define a function that will run before and after each test 
 */


 describe("Before each and after each function",() =>{
    var myString = "a";
    beforeEach(()=>{
        myString = "Test string";
    })

    afterEach(()=>{
        expect(myString).toBe("a");
    });

    it("should find and clear the my string variable", ()=>{
        expect(myString).toEqual("Test string");
    });
 });
