function forEach(array, fn) {
    if(array && fn){
        array.forEach(fn);
    }
}

forEach([3, 5, 2], function (e) {
    console.log(e)
});
