// function blackFriday(price, discountPrice) {
//     const finalPrice = price - ((discountPrice/100)*price);
//     return finalPrice;
// }

// Función flecha
// const blackFridayArrow = (price, discountItem) =>
//     { const finalPrice = price-((discountItem/100)*price); 
//         return finalPrice 
//     }

//Función flecha corta
// const blackFridayArrow = (price, discountItem) =>  price-((discountItem/100)*price); 

// const priceItem = 1300;
// const discountItem = 50;
// console.log(blackFridayArrow(priceItem, discountItem));


//Callbacks
/*
Los callbacks se utilizan en JS porque este no es un lenguaje de programación que espere a leer un archivo o a obtener el llamado de una API para seguir ejecutando el código, por lo que usamos los callbacks para indicarle que en cuanto termine una función ejecute la siguiente y de este modo asegurar que sí se está ejecutando en orden. 

*/


const numbersArray = [1,2,3,4,5]
let sum = 0
for (let index = 0; index < numbersArray.length; index++) {
    sum += numbersArray[index];

    // return sumArray;
}
console.log(sum);