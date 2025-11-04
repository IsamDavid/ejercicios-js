const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const firstCad = arr[0];
  const resultArray = arr.filter(cadena => {
    if (typeof cadena === 'string'){
        return cadena.includes(firstCad);   
    }
  })
    console.log(resultArray);


