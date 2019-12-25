
interface IA {
    id: number;
}
interface IB  extends IA {
    name: string;
}

class D implements IB {
    id: number;
    name: string;

    constructor(_id: number, _name: string) {
        this.id = _id;
        this.name = _name;
        console.log(this.id);
    }
}

let d = new D(1, 'Vikram');
