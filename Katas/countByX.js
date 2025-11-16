/*
Create a function with two arguments that will return an array of the first multiples of . nx

Assume both the given number and the number of times to count will be positive numbers greater than . 0

Return the results as an array or list ( depending on language ).

Examples
x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
x = 2, n = 5  --> [2,4,6,8,10]
*/
const x=1;
//  -> veces que salen
const n=10;
let z = [];
let count = 0;

for (let index = 0; index < n; index++) {
    count = count+x;
    z.push(count);
}
console.log(z);
// return z;