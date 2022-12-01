
// Import des données
const { readFileSync } = require("fs");
const data = readFileSync("day1.data", { encoding: "utf-8" });

// je converti les données en un tableau  de donnée comprennant chaque repas d'un elfe
const calorieByElfe = data.split('\n\n');
//console.log(calorieByElfe);

// convertir la string en multiple tableau d'integer
const testMapInt = calorieByElfe.map(item => item.split('\n')).map(item => item.map(elem => parseInt(elem), 10));

// additionner toute les valeurs du tableau
const arrayOfSomme = testMapInt.map(item=> item.reduce((acc, curr)=> acc + curr));
console.log(arrayOfSomme);

// Prendre la valeur max du tableau
const result = Math.max(...arrayOfSomme)
console.log(result);

// connaitre le total en calorie des 3 premiers Elfes
// On trie le tableau, on selectionne seulement les 3 premlier, et on additionne les valeurs 

const result2 = arrayOfSomme.sort((a, b) =>  b - a).slice(0, 3).reduce((acc, curr)=> acc + curr);

console.log(result2);




