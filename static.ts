class StaticClass {
    static count = 1;
    constructor(_name: string){
        console.log(_name);
    }
    static print() {
        console.log('Static function');
    }
    static printTwo(_name: string) {
        console.log(_name);
    }
    updateCount() {
        StaticClass.count ++;
    }
}
StaticClass.print();
StaticClass.printTwo('Hello');
console.log(StaticClass.count);
let staticRs = new StaticClass('Vikram');
staticRs.updateCount();
console.log(StaticClass.count);