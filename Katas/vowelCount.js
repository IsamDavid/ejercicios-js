//  https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

const str="hola Mundo";
let count=0;
str.split("").forEach(char =>{
    if('aeiou'.includes(char)){
        count++;
    }
})
return count;
