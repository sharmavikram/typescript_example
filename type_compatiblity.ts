/**
 * Type compatibility in TypeScript is based on structural sub typing. Structural typing is a way of relating types based solely on their members. This is in contrast with nominal typing. 
 */


 interface Named {
     name: string;
 }

 class Person {
     name: string;
 }

 let p1: Named;
 p1 = new Person();
 console.log(p1);

 let p2 = {name: "vikram", age: 28, location: "Raipur"}
 p1 = p2;
 console.log(p1, p2);

 function greet(n: Named) {
     console.log(`Hello ${n.name}`);
 }
//  greet('vikram'); // return error because structure has been changed
 greet(p2);

 /**************Comparing two functions************************** */

 let x = (a: number) => 0;
 let y = (a: number, b:string) => 0;
//  x=y; return error, because we can not assign it
console.log(y);
y =x ;
console.log(y, x);