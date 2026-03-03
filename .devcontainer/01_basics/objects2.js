// OBJECTS K ander OBJECTS

const obj1 = { a : 1, b : 2};
const obj2 = { c : 3, d : 4};

// to add all the objects to one obejct s as
const obj4 = Object.assign({},obj1,obj2);
console.log(obj4); // here both objs is assigned to the {} and stored in obj4


const obj6 = Object.assign(target,obj1,obj2);
console.log(obj6); // here both objs is assigned to the target and stored in obj6 

const obj5 = Object.assign(obj1,obj2);
console.log(obj5); // here the properties of obj2 are added to obj1



//+++++++++++++++++++++++++++++++++++++++++++++++++

// finally we will use this property only ... 

// we can also add the properties of obj2 to obj1 using the spread operator
const obj3 = {...obj1, ...obj2};
console.log(obj3); // this will return { a : 1, b : 2, c : 3, d : 4}