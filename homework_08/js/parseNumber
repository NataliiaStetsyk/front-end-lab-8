/* function accepts number,
converts it to array, checks if the array element is odd/even, 
and returns an object with the quantity of odds and evens */

function parseNumber(num) {

    if (typeof(num) != "string") {
        arr = Array.from(num.toString()).map(Number);
        var odd = 0;
        var even = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 1) {
                odd = odd + 1;
            }
            if (arr[i] % 2 === 0) {
                even = even + 1;
            }

        }

        var obj = {
            "odd": odd,
            "even": even
        }

        return obj;
    } else {
        return false;
    }
}

parseNumber(1234)
