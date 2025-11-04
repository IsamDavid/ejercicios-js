const x = '45385593107843568'

console.log(x.split('').map(number => number < 5 ? 0:1).join(''));
