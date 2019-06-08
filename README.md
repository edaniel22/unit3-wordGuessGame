# wordGuessGame

1. In this chess-themed hangman game, a word is randomly selected from an array and displayed on the screen as underscores
that span the full length of the random word to be guessed.

2. When the user presses a letter they think is in the word, it is converted to ALL CAPS and checked against the word
to be guessed.

3. If the letter the user presses is in the word, it will be displayed on the screen in the right place. If not, it will be 
displayed on the screen as a wrong letter the user has already guessed and the amount of guesses will decrease by 1.

4. If the user gets the word right before the number of guesses reaches zero, they win. If they win, totaly number of wins
increases by 1 and an icon related to the word they guessed is displayed on the screen. The game then restarts.

5. If the user guesses 10 wrong letters before guessing the word, they lose and the game then restarts.