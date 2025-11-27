/**Exercice1**/

let nombres = [1, 2, 3, 4, 5];

for (let compteur = 0; compteur < nombres.length; compteur++) {
  console.log(nombres[compteur]);
}

/**Exercice2**/
let number = [1, 2, 3, 4, 5];

function sommeTableau(tableau) {
  let result = 0;
  for (let number of tableau) {
    result = result + number;
  }
  return result;
}

console.log(sommeTableau([1, 2, 3, 4, 5]));

/**Exercice3**/

// const mots = ["Bonjour", "Laura"];

function motPlusLong(tableauMots) {
  let motLong = "";
  for (let mots of tableauMots) {
    if (mots.length > motLong.length) {
      motLong = mots;
    }
  }
  return motLong;
}

console.log(motPlusLong(["Bonjour", "Laura"]));

/**Exercice 4**/

// Écrivez une fonction inverserChaine(chaine) qui prend une chaîne de caractères
// et retourne la chaîne inversée en utilisant une boucle.

function inverserChaine(chaine) {
  let reversed = "";
  for (let i = chaine.length - 1; i >= 0; i--) {
    reversed = reversed + chaine[i];
  }
  return reversed;
}
let test = inverserChaine("javascript");
console.log(test);

/**Exercice 5**/

// Créez une fonction compterVoyelles(chaine) qui retourne le nombre de voyelles
// dans une chaîne de caractères.

function compterVoyelles(chaine) {
  const voyelles = "aeiouyAEIOUY";
  let compteur = 0;
  for (let letter of chaine) {
    if (voyelles.includes(letter)) {
      compteur++;
    }
  }
  return compteur;
}

console.log(compterVoyelles("cacaprout"));

/**Exerceice 6**/

// Écrivez une fonction nombresPairs(tableau) qui retourne un nouveau tableau
// contenant uniquement les nombres pairs du tableau d'origine en utilisant une
// boucle.

let nombresTableau = [1, 2, 3, 4, 5];

function nombresPairs(tableau) {
  let pairs = [];
  for (let nombres of tableau) {
    if (nombres % 2 == 0) {
      pairs.push(nombres);
    }
  }
  return pairs;
}

console.log(nombresPairs(nombresTableau));

/**Exercice 7**/

// Créez une fonction compterProprietes(objet) qui retourne le nombre de propriétés
// (clés) dans un objet.
// Indice : Utilisez une boucle for...in pour parcourir les propriétés de l'objet.

let objet = {
  propriétés1: clés,
  propriétés2: clés,
};

function compterProprietes(objet) {
  for (let clé in objet) {
    
  }

  return objet;
}

console.log(compterProprietes(objet));
