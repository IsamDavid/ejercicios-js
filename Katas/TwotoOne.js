const a = "xyaabbbccccdefww"
const b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

//Convertimos a array para manipularlo. (con la estructura de datos Set no hace falta separarlo )
// const c = (a+b).split('')
// Quitamos los valores duplicados con Set y con el operador spread [...] lo convertimos a array.
//Ordenamos los datos y los volvemos de nuevo cadenas de carácteres. 
return [...new Set(a+b)].sort().join('')
// console.log(uniqueString);