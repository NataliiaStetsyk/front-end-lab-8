var message = confirm("Do you want to play a game?");

if (message) {

    while (message) {

        var turns = 3;
        var x = 0;
        var y = 5;
        var h = Math.floor(Math.random() * ((y - x) + 1) + x);
        h = parseInt(h);



        var prize1 = "$10";
        var prize2 = "$5";
        var prize3 = "$3";
        var prize4 = "$0";

        //prompt the user for a guess
        var guess = prompt('Enter a whole number between 1 and 5' + "\n" + 'Attempts left:' + " " + turns + "\n" + "Possible prize on current attempt:" + " " + prize1);

        //ensure user entered something


        if ((guess < 0) || (guess > 5) || (!guess) || (isNaN(guess))) {
            console.log('Incorrect data!');

        }
        //convert it to a number
        //guess = parseInt(guess);
        guess = Number(guess);

        if ((guess == h) && (turns == 3)) {
            var prize = prize1;
            console.log("You won prize" + " " + prize);


        } else {
            turns = 2;
            var guess = prompt('Enter a whole number between 1 and 5' + "\n" + 'Attempts left:' + " " + turns + "\n" + "Possible prize on current attempt:" + " " + prize2);
if ((guess < 0) || (guess > 5) || (!guess) || (isNaN(guess))) {
            console.log('Incorrect data!');

        }
            if ((guess == h) && (turns == 2)) {
                var prize = prize2;

                console.log("You won prize" + " " + prize);

            } else {
                turns = 1;
                var guess = prompt('Enter a whole number between 1 and 5' + "\n" + 'Attempts left:' + " " + turns + "\n" + "Possible prize on current attempt:" + " " + prize3);
                if ((guess < 0) || (guess > 5) || (!guess) || (isNaN(guess))) {
            console.log('Incorrect data!');

        }
                if ((guess == h) && (turns == 1)) {
                    var prize = prize3;

                    console.log("You won prize" + " " + prize);

                } else {

                    var prize = prize4;
                    console.log("Thank you for a game. Your prize is:" + " " + prize);
                }
            }


        }
        var m2 = confirm("Do you want to continue a game?");


        if (m2) {

            var prize1 = "$30";
            var prize2 = "$15";
            var prize3 = "$6";
            var prize4 = "$0";
            var y = 10;
            turns = 3;
            //prompt the user for a guess
            var guess = prompt('Enter a whole number between 1 and 10' + "\n" + 'Attempts left:' + " " + turns + "\n" + "Possible prize on current attempt:" + " " + prize1);

            //ensure user entered something


            if ((guess < 0) || (guess > 10) || (!guess) || (isNaN(guess))) {
                console.log('Incorrect data!');

            }
            //convert it to a number
            //guess = parseInt(guess);
            guess = Number(guess);

            if ((guess == h) && (turns == 3)) {
                var prize = prize1;
                console.log("You won prize" + " " + prize);

            } else {
                turns = 2;
                var guess = prompt('Enter a whole number between 1 and 10' + "\n" + 'Attempts left:' + " " + turns + "\n" + "Possible prize on current attempt:" + " " + prize2);
 if ((guess < 0) || (guess > 10) || (!guess) || (isNaN(guess))) {
                console.log('Incorrect data!');

            }
                if ((guess == h) && (turns == 2)) {
                    var prize = prize2;

                    console.log("You won prize" + " " + prize);

                } else {
                    turns = 1;
                    var guess = prompt('Enter a whole number between 1 and 10' + "\n" + 'Attempts left:' + " " + turns + "\n" + "Possible prize on current attempt:" + " " + prize3);
                    if ((guess < 0) || (guess > 10) || (!guess) || (isNaN(guess))) {
                console.log('Incorrect data!');

            }
                    if ((guess == h) && (turns == 1)) {
                        var prize = prize3;

                        console.log("You won prize" + " " + prize);

                    } else {
                        turns = 0;
                        var prize = prize4;
                        console.log("Thank you for a game. Your prize is:" + " " + prize);
                    }
                }


            }


        } else {

            console.log("Thank you for a game. Total prize is:" + " " + prize);
            var message = confirm("Do you want to play a game?");

        }


    }
} else {

    console.log("You did not become a millionaire");
}