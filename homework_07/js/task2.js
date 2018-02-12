var message = confirm("Do you want to play a game?");
if (!message) {
    console.log("You did not become a millionaire");
}
var min = 0;
var max = 5;
var random = Math.floor(Math.random() * ((max - min) + 1) + min);
random = parseInt(random);
var prize1 = 10;
var prize2 = 5;
var prize3 = 3;
var prize4 = 0;

while (message) {
    var attempts = 3;
    //prompt the user for a guess
    var guess = prompt('Enter a whole number between 1 and ' + max + "\n" + 'Attempts left ' + attempts + "\n" + "Possible prize on current attempt: " + prize1 + "$");
    //ensure user entered something
    if ((guess < 0) || (guess > max) || (!guess) || (isNaN(guess))) {
        console.log('Incorrect data!');
    }
    if ((guess == random) && (attempts == 3)) {
        var prize = prize1;
    } else {
        attempts = 2;
         guess = prompt('Enter a whole number between 1 and ' + max + "\n" + 'Attempts left: ' + attempts + "\n" + "Possible prize on current attempt: " + prize2 + "$");
        if ((guess < 0) || (guess > max) || (!guess) || (isNaN(guess))) {
            console.log('Incorrect data!');
        }
        if ((guess == random) && (attempts == 2)) {
             prize = prize2;
        } else {
            attempts = 1;
             guess = prompt('Enter a whole number between 1 and ' + max + "\n" + 'Attempts left: ' + attempts + "\n" + "Possible prize on current attempt: " + prize3 + "$");
            if ((guess < 0) || (guess > max) || (!guess) || (isNaN(guess))) {
                console.log('Incorrect data!');
            }
            if ((guess == random) && (attempts == 1)) {
                prize = prize3;
            } else {
                prize = prize4;
					
            }
        }	
    }
    prize += prize;
	console.log("Thank you for a game. your prize is: " + prize + "$");
    message = confirm("Do you want to continue a game?"); //	If user does want to continue, make number range twice as big as the previous one 
    if (message) {
         max = max * 2;
         random = Math.floor(Math.random() * ((max - min) + 1) + min);
         random = parseInt(random);
         prize1 = prize1 * 3;
         prize2 = prize2 * 3;
         prize3 = Math.floor((prize2/2) * 1)/1;		
    }
    if (!message) {
        console.log("Thank you for a game. Total prize is: " + prize + "$");
         message = confirm("Do you want to play again?");
         min = 0;
         max = 5;
         random = Math.floor(Math.random() * ((max - min) + 1) + min);
         random = parseInt(random);
         prize1 = 10;
         prize2 = 5;
         prize3 = 3;
         prize4 = 0;
    }
}