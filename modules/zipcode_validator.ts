import {stringValidator } from './string_validator';
export const exp = /^[0-9]+$/;
class zipCode implements stringValidator {

    isAcceptable(s: string) {
        return  s.length === 6 && exp.test(s);
    }
}

let zipcode = new zipCode();
console.log(zipcode.isAcceptable('492008'));