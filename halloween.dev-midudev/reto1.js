/*
Reto #1
https://www.halloween.dev/es/retos/2025/1

Regan ha sido poseída y ahora habla en un lenguaje extraño 😱. El padre Karras ha descubierto que cuando Regan está poseída, invierte completamente las palabras que dice, pero mantiene el orden de las frases.

Tu misión es crear un programa que traduzca los mensajes poseídos de Regan al lenguaje humano normal.

Por ejemplo:

const message = 'i yojne gnihctaw uoy'
translatePossessed(message) // "i enjoy watching you"
Los espacios entre palabras deben mantenerse:

const message = 'siht si gnorw'
translatePossessed(message) // "this is wrong"
Si el mensaje está vacío o solo contiene espacios, devuelve una cadena vacía:

const message = '      '
translatePossessed(message) // ""
Las palabras pueden contener mayúsculas y minúsculas, y deben mantenerse:

const message = 'dooG secitcarP'
translatePossessed(message) // "Good Practices"

*/

// const message = 'i yojne gnihctaw uoy'
/*
const s = 'dooG secitcarP'
  
let char=''
let word='';
let finalWord='';

if(s.trim()===""){
    console.log("Está vacía la cadena" + s);
}
for(let i=0; i<s.length; i++){
  if(s[i]!=' '){
    word = s[i] + word;
  }else{
    finalWord = finalWord + word + " ";
    word='';
  }
}
finalWord =finalWord + word  
console.log(finalWord);
  
//   return ''
// }
// translatePossessed(message)
*/

//Solución con métodos
const message = 'i yojne gnihctaw uoy'
  if (message.trim() === '') return '';

  const finalWord= message.split(' ').map(word => word.split('').reverse().join('')).join(' ')
  console.log(finalWord);

    // .join(' ');
 