var n = parseInt(prompt('How many floors does your Pyramid consist of?'));
if (n > 0 && n <= 20) {
    for (var i = 0; i < n; i++) {
        var output = " ";
        for (var j = 0; j < n - i; j++) {
            output += "   ";
        }
        for (var k = 0; k <= 2 * i; k++) {
            output += "[~]";
        }
        console.log(output);        
    }
    console.log("            Pyramid with" + " " + n  + " " + "floors (n = " + n + ")");
} else {
    console.log("Incorrect data!");
}