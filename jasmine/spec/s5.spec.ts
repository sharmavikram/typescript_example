/**
 * Data driven test:-
 * =====================
 * In date driven test, there are many times where a set of tests for the same pieces of code
 * needs to be repeated over and over with slightly different inputs. if you were testing the ability of a function to
 * recognize the occurrences of a string.
 * 
 * Note: 
 * 1. we are creating own function
 * 2. we need run from js file, because export not support without tsconfig file
 */
 describe("data driven test",() =>{
    using(
    "valid values",
    [
       "hello world",
       "hello india",
       "hello" 
    ],
    (value)=>{
        it(`${value} should contain 'string'`,()=>{
            expect(value).toContain("hello");
        })
    })
 });

 export function using<T> (name: string, values: T[], func: Function) {
    for(var i = 0; i< values.length; i++) {
        func.apply(Object, [values[i]]);
    }
}