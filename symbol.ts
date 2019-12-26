/**
 * Symbols are primitve data type, just like number and string
 * it is inroduced in ECMAScripti2015
 * Eeach symbol has unique property
 */
/*************************Baisc symbol example*************************** */
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