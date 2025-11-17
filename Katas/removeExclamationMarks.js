const s = "Hello World!"

console.log(
    s.split('').filter(exclamation=> exclamation!='!').join('')
);
