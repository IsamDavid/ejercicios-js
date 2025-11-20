const words = ['hello', 'world', 'this', 'is', 'great'];

// console.log(words.join(' '));

let wordsResult = '';
words.forEach(element => {
    wordsResult = wordsResult + element + ' ';
});
console.log(wordsResult.trim());

