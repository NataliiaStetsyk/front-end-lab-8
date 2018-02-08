var side1 = parseFloat(prompt('What is the length of the 1st side?'));
var side2 = parseFloat(prompt('What is the length of the 2nd side?'));
var side3 = parseFloat(prompt('What is the length of the 3rd side?'));


var AB = side1 + side2;
var AC = side1 + side3;
var BC = side2 + side3;


if ((side1 <= 0) || (side2 <= 0) || (side3 <= 0) || isNaN(side1) || isNaN(side2) || isNaN(side3)) {

    console.log("Incorrect data!");
} else {

    if ((AB > side3) && (AC > side2) && (BC > side1)) {
        var sideAsqrd = side1 * side1;
        var sideBsqrd = side2 * side2;
        var sideCsqrd = side3 * side3;
        var A2B2 = sideAsqrd + sideBsqrd;
        var A2C2 = sideAsqrd + sideCsqrd;
        var B2C2 = sideBsqrd + sideCsqrd;
        var perimeter = (side1 + side2 + side3) / 2;
        var area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
        var area = Math.round(area * 100) / 100;

        if ((sideAsqrd == B2C2) || (sideBsqrd == A2C2) || (sideCsqrd == A2B2)) {
            console.log("Type of a triangle is right" + " " + "and the square is" + " " + area + "    ");
        } else {

            console.log("Type of a triangle is" + " " + getTriangleType(side1, side2, side3) + " " + "and the square is" + " " + area + "    ");

        }

    } else {
        console.log("Incorrect data!");
    }


}


function getTriangleType(a, b, c) {
    return (a === b && b === c) && 'equilateral' ||
        (a === b || a === c || b === c) && 'isosceles' ||
        'scalene';
}