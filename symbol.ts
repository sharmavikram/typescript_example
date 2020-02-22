/**
 * Symbols are primitive data type, just like number and string
 * it is introduced in ECMAScript2015
 * Each symbol has unique property
 */
/*************************Basic symbol example*************************** */
let s1 = Symbol("key");
let s2 = Symbol("key");
console.log(s1);
if(s1 === s2) {
    console.log('true');
}else {
    console.log('false');
}

/***********************Symbol with Object******************************* */

let sym = Symbol();
let obj = {
    sym: "value",
    // [sym]: "value1"
}
console.log(obj.sym);

/***********************Symbol with class function******************************* */
const getClassNameSymbol = Symbol();
class Symbol_Class {
    [getClassNameSymbol]() {
        return 'C';
    }
    getClassNameSymbol() {
        return 'D';
    }
}

let sc1 = new Symbol_Class();
console.log(sc1[getClassNameSymbol]());
console.log(sc1.getClassNameSymbol());