let suma = 0;
function sumaRecursiva(num) {
    if (num === 0) {
        return suma;
    }else{
        suma += num;
        // console.log(suma);
        return sumaRecursiva(num-1);
    }
}
console.log(sumaRecursiva(3));


// sumaRecursiva(3)