
//Demande le nom et le stock dans la variable name
var cptPoints =0;
var userPoints =0;
var playAgain ="";
var choice ="";

// Function that ask for the name and chain while namelenght < 2 & >20.
function askName(){
    var name = prompt("Si vous souhaitez jouer, rentrez votre nom");
        while (name.length < 2 || name.length > 20){
            name = prompt("Veuillez rentrer un nom correct (< 20 et > 2)");

        };
    //Utilise la variable name pour demander si le joueur est pret.
    alert ("Es tu prêt  " + name + "?");
};

function playGame(){

//Demande le choix du joueur et le stock dans la variable choice, vérifie que le choix soit pierre feuille ou ciseau
    function verifChoice (){ 
       var choice = prompt("Choisis pierre, feuille ou ciseaux.");
        
        while (choice != "pierre" && choice != "feuille" && choice != "ciseaux"){
            var choice = prompt("Veuillez ecrire pierre feuille ou ciseaux correctement.");
        }
        return choice;
    };

var choice = verifChoice();
//je crée une constant pierre feuille ciseaux car ils ne bougeront pas.
const pfc=["pierre", "feuille", "ciseaux"];
//je permet à l'ordinateur de random dans ma constant PFC
var cptrandom = Math.floor(Math.random() * pfc.length); 
//je stock le choix de l'ordinateur dans une variable
var cptChoice= pfc[cptrandom];
// j'affiche les résultats
alert ("L'ordinateur a choisis " + cptChoice + " et vous avez choisis " + choice + ".");

//fonction pour décider qui gagne
function whoWin(){
    if( cptChoice === choice){
        alert("Egalité.");
    }
    else if (cptChoice === "pierre" && choice === "ciseau" || cptChoice === "feuille" && choice === "pierre" || cptChoice === "ciseaux" && choice === "feuille"){
        cptPoints ++;
        alert("Vous avez perdu. \n Vous avez " + userPoints + " points. \n L'ordinateur a " + cptPoints + " points." );
    }
    else{
        userPoints ++;
        alert ("Vous avez gagné ! \n Vous avez " + userPoints + " points. \n L'ordinateur a " + cptPoints + " points.");
    }
};
whoWin();
};

function anotherOne (){
    do{
        var playAgain = prompt("Pour rejouer taper yes, pour arrêter taper no");
    }
    while (!["yes", "no"].includes(playAgain));
        if (playAgain === "yes"){
            userPoints = 0 ;
            cptPoints = 0 ;
        } 
        else{
            alert("Merci d'avoir joué !");
        } 
};
// the game :

// Message de bienvenue
alert("Bienvenue sur le site du Shifumi !");
askName();
while (cptPoints !=3 && userPoints !=3){
    playGame();

   if(cptPoints === 3 || userPoints === 3) {
    anotherOne();   
   }
};