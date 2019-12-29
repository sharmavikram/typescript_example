describe("s1.spec.ts", ()=>{
    it("should fail",()=>{
        let undefinedValue =10;
        expect(undefinedValue).toBeDefined("should be defined"); // value should be defined
        
    });

    it("expect value to be(5)",() =>{
         let twoValue = 5;
         expect(twoValue).toBe(5);   // exact value
    });

    it("expect string contain r", ()=>{
        let testString = "Hello world";
        expect(testString).toContain("r");
    })

    it("expect to be truthy",()=>{
        let trueValue = true;
        expect(trueValue).toBeTruthy();
    });

    it("expect false to be truthy",()=>{
        let trueValue = false;
        expect(trueValue).not.toBeTruthy();
    });

    it("expect value not be null",()=>{
        let definedValue =2;
        expect(definedValue).not.toBeNull();
    });

    // compare javascript ojbects
    it("expect object to be equal",()=>{
        let obj1 = {name:"vikram", age: 28};
        let obj2 = {name:"vikram", age: 28};
        expect(obj1).toEqual(obj2);
    });


});