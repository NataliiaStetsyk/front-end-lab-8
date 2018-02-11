var euro = parseInt(prompt('Please, input amount of EURO'));
var usd = parseInt(prompt('Please, input amount of USD'));

if (isNaN(euro) || isNaN(usd)) {
    console.log("Incorrect data!");
} else {
    var EuroToUAH = euro * 33.8565;
    var EuroToUAH = parseFloat(EuroToUAH.toFixed(2));
    var UsdToUAH = usd * 27.4609;
    var UsdToUAH = parseFloat(UsdToUAH.toFixed(2));

    var EuroToUsd = 33.8565 / 27.4609;
    var EuroToUsd = parseFloat(EuroToUsd.toFixed(2));

    console.log("For data" + " " + euro + "," + " " + usd + ":" + " " + euro + " " + "euros are equal" + " " + EuroToUAH + " " + "UAH," + " " + usd + " " + "dollars are equal" + " " + UsdToUAH + " " + "UAH" + ", one euro is equal" + " " + EuroToUsd + " " + "dollars.");

}