
/**MANIPULATION VARIABLES**/
/**Exercice1**/

const nom = "Jean";
let age = 30;

console.log(nom)
console.log(age)

/**Exercice2**/

let a = 10;
let b = 20;
let somme = 10 + 20;
console.log(somme)
let produit = 10 * 20;
console.log(produit)

/********************* */
/**CONDITIONS SIMPLES**/
/******************* */

/**Exercice3**/

{
let number = prompt ('Ecris un nombre') 

if (prompt <= 10) {
    console.log("plus petit que 10");
} else {
    console.log("plus grand que 10");
}
}

/**Exercice4**/

let nombre = 9;
 if(nombre%2 == 0){
    console.log("Nombre pair")
 }else {
    console.log("Nombre impair")
 }



/**Exercice5**/

{
let age = prompt('Quel age as-tu ?');

if (age <= 18) {
    console.log("tu es mineur")
} else if (age > 18 && 65) {
    console.log("tu es adulte")
} else {
    console.log("tu es senior")
}
}

/************/
/**BOUCLES**/
/***********/

/**Exercice6**/

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

/**Exercice7**/


let chiffreSaisi = prompt ('Donne moi un chiffre pour que je puisse le multiplier')
console.log (chiffreSaisi);

for(let i = 1; i <=10; i=i+1){
    let resultat = chiffreSaisi*i;
    console.log(chiffreSaisi+'x'+i+'='+resultat);
}

// (chiffreSaisi+'x'+i+'='+resultat) => même chose que 5x1=5
// chiffreSaisi → "5"
// + → on ajoute
// ' x ' → le texte " x "
// + → on ajoute
// i → "3"
// + → on ajoute
// ' = ' → le texte " = "
// + → on ajoute
// resultat → "15"


/**Exercice8**/

let numéroSaisi = 1;

for(let i = 1;i <=100; i=i+1){
   

}


/**Exercice9**/

let number = prompt ('Devine un nombre');
while (number <10){
    Math.random(0.5);
    if (number ===0.5){
        console.log("bravo,c'est correst");
    }else {
        console.log ("Essaye encore")
    }
}


