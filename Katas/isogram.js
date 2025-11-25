// https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions/javascript

function isIsogram(str){
  strLower = str.toLowerCase().split('')
  let isIso = true;
  let seen = new Set();

  strLower.forEach(element => {
      if (seen.has(element)) {
          isIso = false;
      }
      seen.add(element);
  });
  return isIso;
}