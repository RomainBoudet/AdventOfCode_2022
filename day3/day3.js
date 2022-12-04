// Import des données
const { readFileSync } = require("fs");
const data = readFileSync("day3.data", { encoding: "utf-8" });

// une ligne est égale a un sac a dos, avec chaque lettre des objets contnu dans celui çi !
// Qes des nombre de lettre paires
// 2 compartiments dans le sac, la premiere moitié des caractéres pour le premier compartiment, la seconde moitiée de caractére pour le second compartiment

// minuscule priorité de 1 a 26
// majuscule priorité de 27 à 52

// splitté chaque sac a dos en deux compartiment
// comparé les deux compartiments
// extraire la lettre qui est la même dans chaque compartiment

// appliqué la priorité de traitement pour chaque lettre
// faire la somme des priorité !

const dataFormatted = data.split("\n");

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

console.log("dataFormatted ==>  ", dataFormatted);

const splitData = dataFormatted.map((item) => [
  item.substring(0, item.length / 2),
  item.substring(item.length / 2),
]);

// Doit prendre un array, d'arrays, contenant chacun 2 strings.
const resultExo1 = (arr1) => {
  

  let arrayOfValue = [];
  // Dans chaque tableau de 2 strings :
  for (const elem of arr1) {
    // je convertit chaque string en entrée en tableau de caractéres :

     let inteneArray = [];

    // je boucle sur chaque caractéres
    elem[0].split("").forEach((item) => {
     
      // je me demande si des caractéres de la premiere appartiennent à la seconde string (convertit en tableau)
      elem[1].split("").includes(item) === true
        ? inteneArray.push(item)
        : null;

    });
  // ici plusieurs même lettres peuvent être présent dans les deux ensembles, puisque je ne veux qu'une lettre, je ne prend que la premiere lettre du tableau si répétition, et je prends la valeur de son index + 1 pour avoir son score.
   arrayOfValue.push(letters.indexOf(inteneArray[0]) + 1);
  }
  console.log("arrayOfValue ==> ", arrayOfValue);

  // je fais la somme des valeurs. 
  const result = arrayOfValue.reduce((acc, curr) => acc + curr)
  return console.log("result ==> ", result);
};

resultExo1(splitData);

//EXO 2 
// on compare chaque boc de 3 lignes désormais !

// je fais un tableau avec les 3 valeurs :
// Chacunes des 3 valeurs, je construit un nouveau tableau

const dataPerChunk = 3;

const arrayof3 = dataFormatted.reduce((resultArray, item, index) => { 

  const chunkIndex = Math.floor(index/dataPerChunk)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // commence un nouveau tableau
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, [])

console.log("arrayof3 => ", arrayof3);

// J'extrait la lettre unique comprises dans les 3 strings :

const resultExo2 = (arr2) => {

  let arrayOfValue = [];

  for (const elem of arr2) {

    console.log("elem => ", elem);

     let inteneArray = [];

    elem[0].split("").forEach((item) => {


      console.log("item => ", item);
     
      elem[1].split("").includes(item) && elem[2].split("").includes(item) === true
        ? inteneArray.push(item)
        : null;

    });
   arrayOfValue.push(letters.indexOf(inteneArray[0]) + 1);
  }

  const result = arrayOfValue.reduce((acc, curr) => acc + curr)
  return console.log("result ==> ", result);

};

resultExo2(arrayof3);
