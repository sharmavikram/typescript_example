namespace NameSpace {
   export class firstNameSpace {

    }
    export class secondNameSpace {
        id: number | undefined;

        setNumber (_id: number) {
            this.id = _id;
            console.log(this.id);
        }
    }
}

let withoutExport = new NameSpace.firstNameSpace();
let withExport = new NameSpace.secondNameSpace();
withExport.setNumber(10);