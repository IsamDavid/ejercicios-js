/*
Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false
*/

const str = "abc";
const ending = "ab1c";

function solution(str, ending){

    if (str.slice(-ending.length) === ending) {
        console.log("true");
    }else{
        console.log("false");
    
    }    
}

solution(str, ending);

// Opcioón 2
// str.endsWith(ending);