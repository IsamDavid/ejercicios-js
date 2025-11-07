// const string = "Why isn't my code working?";
const upperString = string.toUpperCase()
const newWord = upperString.split('').filter((word => word!=' '));
const result = newWord.map(letter => letter += '  ');
return result.join('').trim();
// console.log(result.join('').trim());

/* 
Solución de la comunidad:
function vaporcode(string) {
  return string.toUpperCase().split(" ").join("").split("").join("  ");
}
*/