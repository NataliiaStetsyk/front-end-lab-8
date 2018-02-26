function increment (value) {
        return ++value;
    };


    function getTransformedArray (array, fn) {
        array.forEach(function(v,i) {
            array[i] = increment(v);
        });

        return array;
    };
