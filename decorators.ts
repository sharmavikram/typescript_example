function singleDecorator(constructor: Function) {
    console.log(constructor.name);
    console.log('Single decorators');
    console.log("===========================");
}

function secondDecorator(constructor: Function) {
    console.log('Second decorators');
    console.log("===========================");
}
function decoratorFectory(name: string) { //decorator fectory
    return function(constructor: Function){
        console.log(name);
        console.log("===========================");
    }
}

function propertyDec(target:any, propertyKey: string) { // property decorator
    console.log(target);
    console.log(target.constructor);
    console.log(target.constructor.name);
    console.log(propertyKey); // string
    console.log("===========================");
}

function propertyDecWithParams(target:any, propertyKey: string, parameterIndex: number) { // parameter decorator
    console.log('parameter ' + parameterIndex)
    console.log("===========================");
}

function methodDec(target:any, methodName:string, descriptior: PropertyDescriptor) { // method decorator
    console.log(target);
    console.log(methodName);
    console.log('hell0-'+target[methodName]);
    console.log(descriptior);
    console.log("===========================");
}


function auditLogDec(target:any, methodName:string, descriptior: PropertyDescriptor) {
console.log("===========================");
 let OF = target[methodName];
   let AF = function(this: any) {
       console.log(`${methodName} called`);
       for(let i = 0; i< arguments.length; i++){
           console.log(`args ${i} =${arguments[i]}`);
       }
       OF.apply(this, arguments);
    
   }
   
   target[methodName] = AF;
   return target; 
   
}

@singleDecorator
@secondDecorator
@decoratorFectory('vikram')
class classWithSimpleDecorator {
    @propertyDec name: string;
    public getDetails(@propertyDecWithParams fname: string, @propertyDecWithParams lname: string) {
        console.log(`${fname} ${lname} Get Details`);
    }
}

let c1 = new classWithSimpleDecorator();
c1.getDetails('vikram', 'sharma');

class classWithMethodDec {
    @methodDec
    print(print: string) {
        console.log(print + 'Print');
    }

    @auditLogDec
    passArgs(arg1: string, arg2: string) {
        console.log('pass Args function called');
    }
}

let c2 = new classWithMethodDec();
c2.passArgs('arg', 'arg2');

