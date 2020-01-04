/**
 * Skipping test:-
 * ================
 * it is similar to fource test, test can be skipped using xit instead of it and xdescribe 
 * instead of describe
 * 
 * We are skipping the test in two ways
 * 1st. xit
 * 2nd. pending function
 */

 describe("skipping test", () =>{
    xit('using xit', () =>{
        expect(true).toBe(true);
    });

    it("using pending", () =>{
        expect(false).toBe(false);
        pending("this test should be implemented correctly");
    });
 });