// java hosting scopes is a way to control the visibility
//  and accessibility of variables, functions, and classes within a Java program.

// 1. Local Scope: Variables declared within a method or block of code are only accessible within that method or block. They cannot be accessed outside of it.

// 2. Instance Scope: Variables declared within a class but outside


//++++++++++++++++++++++CASE 2  use of this
const temp = () => {
    console.log(this); // this will refer to the global object (window in browser)
}
temp();
const temp2 = function(){
    console.log(this); // this will refer to the object that is calling the function 
}

temp2();



// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "hitesh" }) // to return the object 
// we need to wrap it in parentheses
//  otherwise it will be considered as a block of code and not an object

console.log(addTwo(3, 4))