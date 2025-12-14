const dna = "ATTGC"
let adn  = []

dna.split("").map(charDna =>{
    switch (charDna) {
        case "A":
            adn.push("T")
            break;
        case "T":
            adn.push("A")
            break;
        case "G":
            adn.push("C")
            break;
        case "C":
            adn.push("G")
            break;
        default:
            break;
    }
})
console.log(adn.join(""));

