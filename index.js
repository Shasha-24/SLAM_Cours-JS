const uneChaine = 'ceci est une chaine';

const uneAutreChaine = "une autre chaine";
const aNumber = 3;
const encoreUneAutreChaine = `Yet another string`;

const contactString = uneChaine + ' ' + uneAutreChaine
const  withContactMethod = encoreUneAutreChaine.contact(',that\'s so great !');
console.log(withContactMethod);

console.log(message.toLowerCase());
console.log(message)

var monTableau = [valeur1, valeur2, valeur3];

var monTableau = new Array(valeur1, valeur2, valeur3);

var monTableau = [];
monTableau[0] = valeur1;
monTableau[1] = valeur2;
monTableau[2] = valeur3;

const myArray = [1, 2, 3, 4, 5, 6, 7]
  
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
} 


const age = 25;

if (age <= 18) {
    console.log("Vous êtes majeur !");
}

for (let element of myArray) {
    console.log(element)
}

//Declaration d'un objet//

const someStudent = {
    lastname: 'GAILLETON',
    firstname: 'David',
    age: 18,
    hobbies : ['computer science', 'cooking', 'clarinette',],
    beauty: 'According to M.BARBET: really hansdome'
}

console.log(someStudent.na)


//definition à fonction qui retourne la difference entre deux nombre //

function soustraire(a,b){
    return a - b;
}

const resultat = soustraire(4, 5);  //on stocke le resultat de l'appel de la fonction soustraire dans la variabke résulat//clea


function soustraire(a, b) {
    return a - b;
}

const soustraire = (a, b) => {
    return a - b;
}

const soustraire = (a, b) => a - b;


const afficheConslole = chaine => console.log(chaine);