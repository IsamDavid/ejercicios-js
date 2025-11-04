//reduce () case 1

const numberReduce = [1,2,3,4,5]

const sum = numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue,0)

console.log(sum);

//reduce () case 2 -> Qué tanto se repite una palabra en un array
const words = ['apple', 'banana', 'hello', 'bye', 'bye','hello', 'hello']

const wordFrecuency = words.reduce((accumulator, currentValue)=>{
    if(accumulator[currentValue]){
        accumulator[currentValue]++
    }else{
        accumulator[currentValue] = 1;
    }
    return accumulator
},{})

console.log(wordFrecuency);
