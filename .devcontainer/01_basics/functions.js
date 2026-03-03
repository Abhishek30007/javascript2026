
const func1 = function(num1,num2){
    console.log(num1+num2);
}

const res = func1(10,20);// the func1 is printing the sum not return the value
// so the res will be undefined

console.log("result is ",res); // this will print undefined as the function does not return anything

const func2 = function(num1,num2){
    return num1+num2;
}
const res2 = func2(10,20);  
console.log("result is ",res2);
 // this will print 30 as the function returns the sum of num1 and num2



// ++++++++++++++++++++++CASE 2
function func3(name){
    return `hello ${name}`;
}

func3("abhishek"); // this will return "hello abhishek" but
//  it will not print anything as we are not printing ==> using console.log

//++++++++++++++++++++++++ if else method
// in javascript undefined and null are considered as false 
// and all other values are considered as true

// so
if(!func3("abhishek")){
    console.log("function did not return a value");
}else{
    console.log("function returned a value");
}


//++++++++++++REST operators or spread operators
// rest operator is used to collect the remaining elements in an array or object
// spread operator is used to spread the elements of an array or object

const arr1 = [1,2,3,4,5];
const [a,b,...rest] = arr1; // rest will collect the remaining elements in the array
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3,4,5]

 