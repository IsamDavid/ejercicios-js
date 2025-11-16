/*
https://leetcode.com/problems/max-consecutive-ones/submissions/1831536397/
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.

Mi logíca me dice que voy a recorrer mi array hasta el final
    Voy leyendo si el valor del array es 1 entonces le sumo 1 al currentConsecutive
    Si no es 1 entonces hago (currentConsecutive > FinalConsecutive){
        Entonces guardo currentConsecutive en FinalConsecutive y lo pongo en 0 el currentConsecutive para que siga contando los nuevos 1 que se encuentre    
    }
    Imprimimos el finalConsecutive al final
*/
const nums = [1,1,0,1,1,1]
let finalConsecutive = 0;
let currentConsecutive = 0;

nums.forEach(element => {
    if (element == 1) {
        currentConsecutive++;
        // console.log("currentConsecutive: ",currentConsecutive);
    }else if(currentConsecutive > finalConsecutive){
        finalConsecutive = currentConsecutive;
        currentConsecutive = 0;
        // console.log("final consecutive: ", finalConsecutive);
    }else{
        currentConsecutive = 0;
    }
});
if (currentConsecutive > finalConsecutive) {
    console.log(currentConsecutive);
}else{
    console.log(finalConsecutive);
}

/*
Hay que resetear currentConsecutive cada que veamos un 0 para que haga correcta la cuenta de 1's. 
En caso de que no sea mayor currentConsecutive al mayor que tenemos entonces le damos ese reset.

Esta solución es O(n) porque recorremos todo el array en su tamaño n por lo que necesitamos buscar otro método para bajar su complejidad.
*/
