/*  destructuring == SYNTACTICAL SUGAR  basss...
*/

const obj1 = {
    name : "abhishek",
    roll : 101,
    dob : "01-01-200011",
}

// we can also use destructuring to extract the values from the object
const {name : finalname, roll, dob} = obj1;
//console.log(name); // after defing another name it will give erro
console.log(finalname); // this will return "abhishek"
console.log(roll); // this will return 101
console.log(dob); // this will return "01-01-200011"