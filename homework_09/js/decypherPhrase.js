function returnValues(obj, arr){ // helper function that replaces letters in object and array, and returns new transformed array

  for (var i in obj) {
    for (var j in arr) {
      if (i == arr[j]) {
        arr.splice(j, 1, obj[i]);

      }
    }
    
  }
return arr;
}

//The Invert Function
function invert(obj) {

  var new_obj = {};

  for (var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      new_obj[obj[prop]] = prop;
    }
  }

  return new_obj;
}

function decypherPhrase(charactersMap,str) {

  str.toString();
  console.log(str);//just to test it outputs a string
  var array = str.split(''); //converts string to array
  console.log (array);//just ro test it outputs an array

  var invertedObj = invert(charactersMap);
  var transformedArray = returnValues(invertedObj, array);

  strAfter = transformedArray.join ('');//converts array to string
  console.log(strAfter);// just to test it outputs a string
}

 
var charactersMap = {a: 'o', c: 'd', t: 'g'}
decypherPhrase(charactersMap, 'kiggy dog'); 
