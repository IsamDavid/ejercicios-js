// 1. Copying an Array

const originalArray = [1,2,3,4,5]
const copyOfAnArray = [...originalArray]

console.log(originalArray);
console.log(copyOfAnArray);


// 2. Combining Arrays

const array1 = [1,2,3]
const array2 = [4,5,6]

console.log([...array1,...array2]);

// 3. Creating Arrays with Additional Elements

const baseArray = [1,2,3];
const arrayAdditionalElements = [...baseArray,1,2,3];

console.log(arrayAdditionalElements);

// 4. Pass elements to functions

function sum(a,b,c) {
    return a+b+c
}
const array=[1,2,3]
console.log(sum(...array))

