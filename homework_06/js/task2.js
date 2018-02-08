var euro = parseInt(prompt('Please, input amount of EURO'));
var usd = parseInt(prompt('Please, input amount of USD'));

if (isNaN(euro) || isNaN(usd)) {
    console.log("Incorrect data!");
} else {
    var EuroToUAH = euro * 33.8565;
    var EuroToUAH = Math.round(EuroToUAH * 100) / 100;
    var UsdToUAH = usd * 27.4609;
    var UsdToUAH = Math.round(UsdToUAH * 100) / 100;

    var EuroToUsd = 33.8565 / 27.4609;
    var EuroToUsd = Math.round(EuroToUsd * 100) / 100;

    console.log("For data" + " " + euro + "," + " " + usd + ":" + " " + euro + " " + "euros are equal" + " " + EuroToUAH + " " + "UAH," + " " + usd + " " + "dollars are equal" + " " + UsdToUAH + " " + "UAH" + ", one euro is equal" + " " + EuroToUsd + " " + "dollars.");

}