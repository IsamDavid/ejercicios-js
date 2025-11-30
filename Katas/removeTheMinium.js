// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

const numbers = [1,3,2,1,4];
/*
1.- Ver si el arreglo está vacío, si es así entonces regresamos el arreglo y terminamos el programa
2.- Hacer una variable que guarde el valor minimo y la iniciamos con el valor de la primera posición del array, también hacemos una variable para guardar la posición con el i del for  
3.- Recorremos todo el arreglo y vamos comparando el valor 1 por 1 con la variable del minimo creada en el paso 1,
    Si minimo es mayor a valor actual entonces guardamos valor actual y pasamos.
    Si no es cierto, entonces pasamos al siguiente valor
4.- terminamos de recorrer el arreglo
5.- Sacamos el valor del arreglo de la posición guardada con pop
6.- Regresamos el arreglo */

if (numbers.length){
    let minimum = numbers[0];
    let posMinimum = 0;
    let newNumbers = [...numbers];
    for (let index = 1; index < numbers.length; index++) {
        if(minimum > numbers[index]){
            minimum = numbers[index];
            posMinimum = index;
        }else{
            continue;
        }        
    }
    // numbers.pop(minimum);
    // console.log(numbers);
    // console.log(
    //     
    // );
    newNumbers.splice(posMinimum,1)
    return newNumbers;
    // console.log(numbers);
    // console.log(`El mínimo es ${minimum}, con la posición ${posMinimum}`);
    
}else{
    console.log(numbers);
}
