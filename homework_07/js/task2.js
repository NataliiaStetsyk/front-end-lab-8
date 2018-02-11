var message = confirm("Do you want to play a game?");

if (message) {
	var x = 0 ; var y = 5;
	var random = Math.floor(Math.random() * ((y-x)+1) + x);
	var attempt = 3;
	var counter = 0;
    do
    {
    counter++;
	var prize1 = "$10";
	var prize2 = "$5";
	var prize3 = "$3";
	
    var number = prompt("Enter a number from 0 to 5");
	
    if (number == random) {
        console.log("You won prize" + " " + prize1);
        }
        else  {
			attempt--;
            console.log("Attempts left:" + attempt);
            }             
    } 
    while (counter <attempt && number != random);
}
else{
	
	console.log("You did not become a millionaire");
}


