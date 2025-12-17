function correct(string)
{
  let result = [];
	result = string.split("").map(char=>{
    if(char === "5") return "S";
    else if(char === "0") return "O";
    else if(char === "1") return "I";
    else return char;
  })
  return result.join("")
}