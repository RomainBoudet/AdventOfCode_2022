// Import des données
const { readFileSync } = require("fs");
const data = readFileSync("day2.data", { encoding: "utf-8" });


//! Exo 2 : 
// premiére colonne : joué par l'adversaire
// Deuxieme colonne joué par moi

/* 
ADVERSAIRE
A => Pierre 
B => Papier
C => Cisseaux

MOI
X => Pierre
Y => Papier
Z => Cisseaux

VALEUR DES GAINS : 

X => 1
Y=> 2
Z=> 3

Perdu => 0
Null => 3
Gagné => 6

 */

//!  ETAPES :
/* 

GENERAL :
Faire la somme de chaque échange en additionnant le type de coup joué et les points de victoire. 
Dans l'idée avoir un tableau ou chaque valeur est la somme du match, on a plus qu'a tous additionné pour avoir la somme du score.

Etape 1 : Conversion des données
Convertir les données en un tableau de sous tableaux, de type => [ 'A Y', 'B X', 'C Z' ]

Etape 2 : Calcul des points :
2 choses à déterminé : Victoire ou non et seconde lettre
Pour chaque tableau, faire un nouveau tableau avec les points pour la lettre, et les points pour le type de victoire ou non => [ [2, 6], [1, 0], [3, 3] ]

convertir la deuxieme lettre selon le chiffre avec un if : si la seconde lettre vaut X, on push 1 dans le new tableau, etc
Calcul de la victoire est des 9 cas possible (?) : si la premiére lettre est un A et que la deuxieme est un A = 

A, X => 3
A, Y => 6
A, Z => 0

B, X => 0
B, Y => 3
B, Z => 6

C, X => 6
C, Y => 0
C, Z => 3


Et on push dans le nouveau tableau le résultat du score

Etape 3 : Addition des score de chaque tableau

Etape 4 : Addition de tous les score de tous les tableaux

*/

(findScore = (data) => {

    const dataFormatted = data.split("\n");
    let score = [];
for (const elem of dataFormatted) {

  let scoreType = 0;
  let scoreWin = 0;
  if (elem.split("")[2] === "X") {
    scoreType = 1;
  }
  if (elem.split("")[2] === "Y") {
    scoreType = 2;
  }
  if (elem.split("")[2] === "Z") {
    scoreType = 3;
  }

  if (elem === "A X") {
    scoreWin = 3;
  }
  if (elem === "A Y") {
    scoreWin = 6;
  }
  if (elem === "A Z") {
    scoreWin = 0;
  }

  if (elem === "B X") {
    scoreWin = 0;
  }
  if (elem === "B Y") {
    scoreWin = 3;
  }
  if (elem === "B Z") {
    scoreWin = 6;
  }

  if (elem === "C X") {
    scoreWin = 6;
  }
  if (elem === "C Y") {
    scoreWin = 0;
  }
  if (elem === "C Z") {
    scoreWin = 3;
  }
  score.push(scoreWin + scoreType);

};

const scoreTotal = score.reduce((acc, curr) => acc + curr);
console.log("scoreTotal ==> ", scoreTotal);
})(data);




//!  Exo 2 :

/* 
ADVERSAIRE
A => Pierre 
B => Papier
C => Cisseaux

Moi
X => 1 Pierre
Y => 2 Papier
Z => 3 Cisseaux

New rules :
X => perte 0
Y => nul 3
Z => win 6

si second chiffre vaut X => je regarde la premiére lettre, si A, je joue Z (cisseau), si B, je joue X (pierre), si C, je joue Y (papier)
si X => combinaison : AZ, BX, CY
si Y => combinaison : AX, BY, CZ
si Z => combinaison : AY, BZ, CX
*/


(findTrueScore = (data) => {

let trueScore = [];

for (const elem of dataFormatted) {

  let scoreType = 0;
  let scoreWin = 0;
  let newCharact = '';

  if (elem === "A X") {
    scoreWin = 0;
    newCharact = 'Z'
  }
  if (elem === "A Y") {
    scoreWin = 3;
    newCharact = 'X'
  }
  if (elem === "A Z") {
    scoreWin = 6;
    newCharact = 'Y'
  }

  if (elem === "B X") {
    scoreWin = 0;
    newCharact = 'X';
  }
  if (elem === "B Y") {
    scoreWin = 3;
    newCharact = 'Y';
  }
  if (elem === "B Z") {
    scoreWin = 6;
    newCharact = 'Z';
  }

  if (elem === "C X") {
    scoreWin = 0;
    newCharact = 'Y'
  }
  if (elem === "C Y") {
    scoreWin = 3;
    newCharact = 'Z'
  }
  if (elem === "C Z") {
    scoreWin = 6;
    newCharact = "X"
  }


  if (newCharact === "X") {
    scoreType = 1;
  }
  if (newCharact === "Y") {
    scoreType = 2;
  }
  if (newCharact === "Z") {
    scoreType = 3;
  }
  trueScore.push(scoreWin + scoreType);

};

const trueScoreTotal = trueScore.reduce((acc, curr) => acc + curr) 
console.log("trueScoreTotal ==> ", trueScoreTotal);

})(data);

