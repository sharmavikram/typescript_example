class myClass {
    public render(divId: string, text: string) {
        var e1: HTMLElement | null = document.getElementById(divId);
        if(e1) {
            e1.innerText = text;
        }

    }

    public doCalculation(a: number, b: number, c: number) {
        console.log((a * b) + c);
    }
    public compare(a: number) {
        if(a.toString() === "2") {
            console.log('true');
        } else {
            console.log(false);
        }
    }

    public restOp() {
        if(arguments.length > 0) {
            for(var i =0; i< arguments.length; i++) {
                console.log(arguments[i]);
            }
        }
    }

    public restFunction(...args: number[]) {
        let object = [
            ...args,
            4,5,6
        ]
        console.log(object);
    }
}
// window.onload = () => {
//     var myClass: any = new myClass();
//     myClass.render('content', 'hello world');
// }
var rs: any = new myClass();
rs.doCalculation("2", 2 ,2);
rs.compare(1);
var i = "hello";
var j = 2;
// i = j;// we can not assign
console.log(i);
var string = "test";
console.log(`my variable=${string}`);

var stringObject = {
    "name": "vikram",
    "phone": 8982103164   
}
console.log(stringObject.name);
console.log(stringObject["phone"]);
let oneMillion = 1_000_000; // numeric seprator
console.log(`${oneMillion}`);
var addVar = function(a: number, b: number) { // anonymous function
    return a + b;
}
console.log(addVar(2, 2));
rs.restOp(1, 2, 3);
rs.restOp("string");
rs.restFunction(1, 2, 3);

interface MyProps {
    id: number;
    name?: string;
}

var rs1: MyProps;
rs1 = {id:1, name: 'hello'}
console.log(rs);