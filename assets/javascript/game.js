//create variables that hold references in the HTML file where
//we want to display things
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById ("wins-text");
var winsDisplayText = document.getElementById("wins-display");
var currentWordText = document.getElementById ("current-word");
var hitsDisplayText = document.getElementById("hits-display");
var guessesDisplayText = document.getElementById("guesses-display");
var missesDisplayText = document.getElementById("misses-display");
var iconDisplayText = document.getElementById ("icon-display");

// initializes variables that display wins and
//number of lives left
var winsNumber = 0;
var guessesLeftNumber = 10;

var chessArray = ["KING", "QUEEN", "KNIGHT", "BISHOP", "PAWN", "ROOK", "CASTLE", "CHECKMATE", "BOARD"];
console.log(chessArray);
console.log(chessArray.length);

//randIndexNumber is a NUMBER
//gives a random number between 0 and the length of the veg array
var randIndexNumber = Math.floor (Math.random()* chessArray.length);
console.log(randIndexNumber);

//choiceString is a STRING 
//choiceString is a string chosen from chessArray array
var choiceString = chessArray [randIndexNumber];
console.log(choiceString);

//underscoreArray is an ARRAY
//initializes a number that is the value of the length word that needs to be guessed
var underscoreArray = [];
console.log(underscoreArray);

//output is a STRING
/* initializes a blank string outputString that will hold
 the currently blank letters on the screen */
var outputString="";
console.log(outputString);

//characterArray is an ARRAY
//turns the string choiceString into an array
var characterArray = choiceString.split('');
console.log(characterArray);

var setup = function () {
    for (var i=0; i<choiceString.length; i++)
    {
        //sets underscoreArray array to "_ ", and will iterate choiceString.length number of times
        underscoreArray[i] = "_ ";
        console.log(underscoreArray);

        //concatenates outputString and underscoreArray choiceString.length number of times
        outputString = outputString + underscoreArray [i];
        console.log(outputString);
    }
    //underscoreArray the string outputString, which now holds the blank values
    hitsDisplayText.textContent = outputString;
    console.log(outputString);

    //resets outputString back to a blank which is a STRING
    outputString = "";
    console.log(outputString);
}

var missedGuessArray = [];
winsDisplayText.textContent = winsNumber;
guessesDisplayText.textContent = guessesLeftNumber;
missesDisplayText.textContent = missedGuessArray;


setup ();

//resets the game and selects another random word after user wins or loses
var restart = function (){

    var chessArray = ["KING", "QUEEN", "KNIGHT", "BISHOP", "PAWN", "ROOK", "CASTLE", "CHECKMATE", "BOARD"];
    choice = Math.floor (Math.random()* chessArray.length);

    guessesLeftNumber = 10;
    guessesDisplayText.textContent = guessesLeftNumber;

    outputString="";

    choiceString = chessArray [choice];
    console.log(choiceString);
    underscoreArray = [choiceString.length];
    
    characterArray = choiceString.split('');
    
    missedGuessArray = [];
    missesDisplayText.textContent = missedGuessArray;

    currentWordText.textContent= "Current Word";

    setup ();
}

// //This function is run whenever the user presses a key
document.onkeyup = function(event) {
    
    winsText.textContent = "Wins";
    //Hides the directions
    directionsText.textContent = "";

    //Determines which key was pressed
    var userGuess = event.key;
    console.log (userGuess);

    //changes all guess to upperCase, consistent with all possible words
    var guessUpperCase = userGuess.toUpperCase();
    console.log (guessUpperCase);
    console.log (typeof(guessUpperCase));

    var alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log (choiceString);
    console.log (outputString);

    if (choiceString.includes(guessUpperCase)){
        for (var j=0; j<characterArray.length; j++)
        {
            if (guessUpperCase == characterArray [j])
            {
            underscoreArray [j] = guessUpperCase;
            console.log (underscoreArray[j]);
            }
            console.log (outputString);
            outputString = outputString + underscoreArray [j] + "";
            console.log (typeof(outputString));
            hitsDisplayText.textContent = outputString;

        }
    } else if (missedGuessArray.includes(guessUpperCase)){

    } else if (alphabetString.includes(guessUpperCase)){
        guessesLeftNumber--;
        guessesDisplayText.textContent = guessesLeftNumber;   
        missedGuessArray.push(guessUpperCase);
        console.log(missedGuessArray);
        missesDisplayText.textContent = missedGuessArray.join(" ");
        if (guessesLeftNumber == 0) {
            currentWordText.textContent= "YOU LOSE!!";
            restart ();
        }

    }

    console.log(outputString);
    console.log(choiceString);

    if (outputString == choiceString) {
        winsNumber++;
        winsDisplayText.textContent = winsNumber;
        winsText.textContent = "YOU WIN!!!"; 
        if (choiceString == "KING") {
            iconDisplayText.innerHTML = "&#xf43f;";
        }
        if (choiceString == "QUEEN") {
            iconDisplayText.innerHTML = "&#xf445;";
        }
        if (choiceString == "KNIGHT") {
            iconDisplayText.innerHTML = "&#xf441;";
        }  
        if (choiceString == "BISHOP") {
            iconDisplayText.innerHTML = "&#xf43a;";
        }
        if (choiceString == "PAWN") {
            iconDisplayText.innerHTML = "&#xf443;";
        }
        if (choiceString == "ROOK") {
            iconDisplayText.innerHTML = "&#xf447;";
        }
        if (choiceString == "CASTLE") {
            iconDisplayText.innerHTML = "&#xf439;";
        }
        if (choiceString == "CHECKMATE") {
            iconDisplayText.innerHTML = "&#xf567;";
        }
        if (choiceString == "BOARD") {
            iconDisplayText.innerHTML = "&#xf43c;";
        }
        restart ();

    }
    
    //resets outputString
    outputString = "";
    console.log(outputString);
} 


