/**
 * Enums allow us to define a set of named constants.
 * Enums can make it easier to document intent, or create a set of distinct cases.
 * TypeScript provides both numeric and string based enums.
 */

 enum direction { 
    up = 1,
    down,
    left,
    right
 }

 function respond (dir: direction): void{
    console.log(dir);
 }
 respond(direction.up);
 respond(direction.down);
 respond(direction.right);
 respond(direction.left);
//  we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. 
// if value is not declared then it will start from 0

/************String Enum*********************** */
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
console.log(Direction.Up);
/****************Heterogeneous enums ************** */
// it will support both numeric and string members

enum stringOrNumber {
    No = 0,
    Yes = "YES",
}
console.log(stringOrNumber.No);
console.log(stringOrNumber.Yes);