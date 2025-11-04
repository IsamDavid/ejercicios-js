/*
Es medianoche en Elm Street y necesitas dormir urgentemente. Intentas contar ovejas, pero las letras en tu mente están completamente desordenadas por culpa de Freddy.

Tienes una cadena de texto caótica con letras mezcladas. Tu único escape es contar cuántas veces puedes formar la palabra "sheep" (oveja en inglés) antes de que Freddy te atrape en la pesadilla.

Tu misión: Contar cuántas ovejas completas puedes formar con las letras disponibles.

Crea una función countSheep(letters) que:

Reciba un string con letras desordenadas
Cuente cuántas veces se puede formar la palabra "sheep"
Devuelva el número de ovejas completas que puedes contar
Importante: Para formar "sheep" necesitas: s, h, e, e, p (la 'e' aparece 2 veces)

countSheep('sheepxsheepy')
// → 2 (puedes formar "sheep" dos veces)

countSheep('sshhheeeepppp')
// → 2 (s=2, h=3, e=4, p=4 → solo 2 "sheep" completas)

countSheep('hola')
// → 0 (no hay suficientes letras)

countSheep('peesh')
// → 1 (las letras están desordenadas pero están todas)
*/

// sheep

const wordSleep = 'ssshhheeeppp'// let frecuencyS = 0;

// let frecuencyH = 0;
// let frecuencyE = 0;
// let frecuencyP = 0;

// wordSleep.split('').forEach(caracter => {
//     if(caracter.toLowerCase() === 's'){
//         frecuencyS++;
//     }else if(caracter.toLowerCase() === 'h'){
//         frecuencyH++;
//     }else if(caracter.toLowerCase() === 'e'){
//         frecuencyE++;
//     }else if(caracter.toLowerCase() === 'p'){
//         frecuencyP++;
//     }
// });

// const numberCount = Math.min(frecuencyS,frecuencyH,(Math.floor(frecuencyE/2)),frecuencyP)
const letters = 'ssshhheeeppp'// let frecuencyS = 0;
let countS = 0;

let countH = 0;
// let frecuencyH = 0;
let countE = 0;
let countP = 0;

letters.split('').forEach(caracter => {
    switch (caracter) {
        case 's':
            countS++;
        case 'h':
            countH++;
        case 'e':
            countE++;
        case 'p':
            countP++;
    }
});

const numberCount = Math.min(countS, countH, (Math.floor(countE / 2)), countP)
console.log('El número de veces que se puede formar la palabra sheep es: ', numberCount);
//   return numberCount;



// let countS;

// wordSleep='sheepxsheepy'
//    const countS=wordSleep.split('').reduce((accumulator, currentValue) => {
//     if(accumulator[currentValue]){
//         accumulator[currentValue]++;
//     }else{
//         accumulator[currentValue]=1;
//     }
//     return accumulator
//    },{});
//    console.log(countS);


  const freq = wordSleep
    .split('')
    .reduce((acc, char) => {
      char = char.toLowerCase();
      if ('sheep'.includes(char)) {
        acc[char] = (acc[char] || 0) + 1;
      }
      return acc;
    }, {});
