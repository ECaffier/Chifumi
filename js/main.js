// Message de bienvenue
alert("Bienvenue sur le site du Shifumi !");
//Demande le nom et le stock dans la variable name
var name = prompt("Si vous souhaitez jouer, rentrez votre nom");
//Utilise la variable name pour demander si le joueur est pret.
alert ("Es tu prêt  " + name + "?")
//Demande le choix du joueur et le stock dans la variable choice
var choice= prompt("Choisis pierre, feuille ou ciseaux.");
//je crée une constant pierre feuille ciseaux car ils ne bougeront pas.
const pfc=["pierre", "feuille", "ciseaux"];
//je permet à l'ordinateur de random dans ma constant PFC
var cptrandom = Math.floor(Math.random() * pfc.length); 
//je stock le choix de l'ordinateur dans une variable
var cptchoice=(cptrandom, pfc[cptrandom]);
// j'affiche les résultats
alert ("L'ordinateur a choisis " + cptchoice + " et vous avez choisis " + choice + ".");
//fonction pour décider qui gagne
function whowin(){
    if( cptchoice === choice){
        alert("Egalité.");
    }
    else if (cptchoice === "pierre" && choice === "ciseau" || cptchoice === "feuille" && choice === "pierre" || cptchoice === "ciseaux" && choice === "feuille"){
        alert("Vous avez perdu.");
    }
    else{
        alert ("Vous avez gagné !");
    }
}
whowin();
//message de fin
alert("Pour une autre partie, faites f5 !")
