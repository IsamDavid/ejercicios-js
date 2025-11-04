const x = '45385593107843568'

  const binary = x.split('')
  const newBinary = binary.map(digit=>{
    if(digit>=5){
      digit='1';
      return digit
    //   console.log("emtro al de 1: ",digit);
    }else{
      digit='0';
      return digit
    //   console.log("entro al de 0",digit);
    }
    
})

console.log(newBinary.join(''));