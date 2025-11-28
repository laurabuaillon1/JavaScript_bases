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
  for (let nombre of tableau) {
    if (nombre % 2 === 0) {
      pairs.push(nombre);
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
  cle1: "Sophie",
  cle2: "lyon",
  cle3: 29,
};

function compterProprietes(objet) {
  let compteur = 0;
  for (let cle in objet) {
    compteur++;
  }

  return compteur;
}

console.log(compterProprietes(objet));

/**Exercice 8**/

// Exercice 8 : Convertir un tableau d'objets en un tableau de valeurs
// Supposons que vous avez un tableau d'objets représentant des produits :
// let produits = [
//  { nom: "Stylo", prix: 2 },
//  { nom: "Cahier", prix: 5 },
//  { nom: "Gomme", prix: 1 }
// ];
// Écrivez une fonction extraireNoms(produits) qui retourne un tableau contenant
// uniquement les noms des produits.

let produitsObj = [
  { nom: "Stylo", prix: 2 },
  { nom: "Cahier", prix: 5 },
  { nom: "Gomme", prix: 1 },
];

function extraireNoms(produits) {
  let names = [];
  for (const produit of produits) {
    names.push(produit.nom);
  }

  return names;
}

console.log(extraireNoms(produitsObj));

//Autres manières plus simple d'écrire des foncions

// const extraireNoms = tableau => tableau.map(produit => produit.nom);

// function extraireNoms(tableau) {
//   return tableau.map(function(produit) {
//     return produit.nom;
//   })

//**Exercice9***

// Créez une fonction factorielle(n) qui calcule et retourne la factorielle d'un
// nombre entier positif n en utilisant une boucle.
// Indice : La factorielle de n (notée n!) est le produit de tous les entiers de 1 à n.

const factoNumber = "n";

function factorielle(n) {
  let numbers = 1;
  for (let number of n) {
    if (n === 0 || n === 1) {
      resultat = resultat * numbers;
    }
  }
  return numbers;
}

console.log(factorielle(number));

/**Exercice 10 **/
// Écrivez une fonction estTrie(tableau) qui retourne true si les éléments du
// tableau sont triés en ordre croissant, false sinon.

const nbrCroissant = [1, 42, 23];

function estTrue(tableau) {
    if(nbrCroissant.sort(tableau)) {
      console.log("true")
    }else {
      console.log("false")
    }
    return nbrCroissant;
  }

console.log(estTrue(nbrCroissant))
