interface IPrint {
    print(): void;
    id: number;
}

class A {
    print() {
        console.log('A');
    }
}

class B {
    print() {
        console.log('B');
    }
}
var a = new A();
a.print();
var b = new B();
b.print();

class C implements IPrint {
    id = 10;
    readonly name : string = 'anil';
    constructor(_name?: string) {
        // this.name = _name;
        console.log(this.name);
    }
    print() {
        console.log(this.id);
        console.log('C');
    }
    setReadOnly(_name: string) {
        // this.name = _name;
        console.log(_name);
    }
}
var c = new C('vikram');
c.print();
c.setReadOnly('hello');

class xy {
    x: number = 10;
    y?: number = 20;
    constructor(_x: number, _y?: number) { 
     this.x = _x; 
     this.y = _y;
     console.log(this.x, this.y);
    }

    getValue() {
        console.log('Hello World');
    }

    getAnotherValueUsingSuper(value:number) {
        console.log(value);
    }
}
interface xyz extends xy {
    z:number;
}    
// let point: xyz = {x:1, y:2, z:3};
// console.log(point);
class P extends xy {
     constructor(x: number, y?: number) {
        super(x, y);
     }   

     getNewValue(){
         super.getAnotherValueUsingSuper(13);
     }

}
let p = new P(10, 10);
p.getValue();
p.getAnotherValueUsingSuper(12);
p.getNewValue();

class Q extends P {

}
let q = new Q( 20, 20);
q.getNewValue();


class FA {
    public id: number;
    getProperties() : string {
        return `id: ${this.id}`;
    }
}


class FB extends FA {
   public name: string;
    getProperties(): string {
        return  `${super.getProperties()}` + ` name: ${this.name}`;
    }
}

let fb = new FB();
fb.id = 1;
fb.name = 'hello';
console.log(fb.getProperties());