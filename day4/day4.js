const { readFileSync } = require("fs");
const data = readFileSync("day4.data", { encoding: "utf-8" });

const dataFormatted = data.split("\n");
console.log("dataFormatted => ", dataFormatted);
//[ '2-4,6-8', '2-3,4-5', '5-7,7-9', '2-8,3-7', '6-6,4-6', '2-6,4-8' ]

// je convertit ça en sous tableau de paire : [['2-4', '6-8], ['2-3', '4-5']]
// puis dans la foulé avec Array, et slice je fais des tableaux contenant uniquement les valeurs souhaitées, plus facilement comparable : [ [['2', '3', '4'], ['6,'7','8']], [['2','3'], ['4','5']] ]

const dataArrays = dataFormatted.map((item) =>
  item
    .split(",")
    .map((elem) =>
      [...Array(parseInt(elem.split("-")[1], 10) + 1).keys()].slice(
        parseInt(elem.split("-")[0], 10)
      )
    )
);
console.log("dataArrays => ", dataArrays);

// je compare si les éléments du tableau 1 inclue tous les élément du tableau 2 ou l'inverse
let result = 0;
for (const item of dataArrays) {

  if (item[0].every((r) => item[1].includes(r)) || item[1].every((r) => item[0].includes(r))) {
    result += 1;
    console.log("ça match !");
  }

}
console.log ("result exo1  ==> ", result);

// je recherche les valeurs dupliquées dans un tableau ou j'ai concaténées les valeurs !
let result2 = 0;
for (const item of dataArrays) {


// const arrayOfDuplicate = item[0].concat(item[1]).filter((item, index) => arr.indexOf(item) !== index)
if (item[0].concat(item[1]).filter((item, index, arr) => arr.indexOf(item) !== index).length > 0){
 result2 += 1;  
}

};

console.log("result2 ==> ", result2);