/* 
Write a function which calculates the average of the numbers in a given array.
Note: Empty arrays should return 0.
*/

const array = [1,1,1];

let average = 0
if (array.length===0) {
    console.log(0);
}else{
    array.forEach(element => {
        average += element;
    });
    console.log(average/array.length);
}
