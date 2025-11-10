/*
Complete the method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer. findNextSquare

If the argument is itself not a perfect square then return either or an empty value like or , depending on your language. You may assume the argument is non-negative.-1Nonenull
*/
// const sq = 4;
  const resultSquare = Math.sqrt(sq);
  return resultSquare % 1 === 0 ? (resultSquare+1)**2 : -1;

// const resultSquare = Math.sqrt(sq) % 1 === 0 ? Math.sqrt(sq) : -1;
// resultSquare === -1 ? -1 : (Math.sqrt(sq)+1)**2;

// console.log(resultSquare === -1 ? -1 : (Math.sqrt(sq)+1)**2);

/*
const sq = 625;

const square = Math.sqrt(sq)

if(square % 1 === 0){
    let perfectSquare = sq+1;
    while (true) {        
        if(Math.sqrt(perfectSquare) % 1 === 0 ){
            return console.log(perfectSquare);
        }
        perfectSquare++;
    }    
} else return console.log(-1);
 */