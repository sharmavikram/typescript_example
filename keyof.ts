/**
 * Typescript allow us to iterate the properties of a type and extract the names of its 
 * properties through the keyof keyword
 */

 interface iPerson {
     id: number;
     name: string;
     surname: string;
 }


 function getKeyUsingKeyOf(key: keyof iPerson, value: iPerson) :void {
    console.log(`${key}: ${value[key]}`);
 }

 let person = {id: 1, name: "vikram", surname: "sharma"};

getKeyUsingKeyOf("id", person);
getKeyUsingKeyOf("name", person);
getKeyUsingKeyOf("surname", person);
