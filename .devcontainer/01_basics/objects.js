 // JSON is JavaScript Object Notation so we will study objects 

const sym = Symbol("$$$");
const obj1 = {
    name : "abhishek",
    roll : 101,
    dob : "01-01-200011",
    sym1 : sym
}

console.log(obj1.name);
console.log(obj1["roll"]);
console.log(obj1["sym1"]); // this will return the array containing the symbol
console.log(typeof obj1.sym1); 
// we can also use the symbol as a key to store values in the object
obj1[sym] = "this is a symbol key";
console.log(obj1[sym]); // this will return the value stored in the symbol key


//+++++++++++++++++++++++++++++++++++++++
 obj1.func1 = function(){
    console.log("this is a function inside an object");
}

obj1.func1(); // this will call the function inside the object

console.log(obj1.func1); // this will return the function definition

console.log(obj1.func1()); // this will call the function and
//  return undefined as the function does not return anything

obj1.func2 = function(){
    console.log(`this is a function inside an object and the name is ${this.name}`);
}

console.log(obj1.func2()); // this will call the function and return undefined as the function does not return anything
// but it will print the name of the object as this.name is used in the function

//NOTE
// in the output the undefined is printed because
//  the function does not return anything, but 
// the console.log is trying to print the return value of the function which is undefined.



// '.' IS USED TO ACCESS WHEN FUNCTION IS THERE ELSE 
// '[]' IS USED TO ACCESS THE VALUE OF THE KEY IN THE OBJECT
