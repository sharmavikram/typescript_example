/**
 * Generic are a way of writing code that deal with any type of object.
 * but still maintain the object type integrity
 */

 class concatenator<T> {
     concatenatorArray(inputArray: Array<T>): String {
        let returnString ="";
        for(let i=0; i< inputArray.length; i++) {
            if(i > 0) {
                returnString +=" ";
            }
            returnString +=inputArray[i].toString();
        }
        return returnString;

     }
 } 
 let stringConcat = new concatenator<string>();
 let numberConcat = new concatenator<number>();
 let stringArray = ['first', 'second', 'third'];
 let numberArray = [1, 2, 3, 4];
 // string concat
 console.log(stringConcat.concatenatorArray(stringArray));
 // number concat
 console.log(numberConcat.concatenatorArray(numberArray)); 
// will return an error because of return type is string


/************ With Class **************************8 */

class GenericClass {
    private _name: string;
    constructor(arg1: number) {
        this._name = arg1 + " my_class";
    }
    toString(): string {
        return this._name;
    }
}

let myArray = [
    new GenericClass(1),
    new GenericClass(2),
    new GenericClass(3),
    new GenericClass(4),
]

let arrayConcat = new concatenator<GenericClass>();
console.log(arrayConcat.concatenatorArray(myArray));