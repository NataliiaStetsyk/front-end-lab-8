
/*Write a function in JavaScript that reverses a string.
For example reverseString(“Ninja”) should return “ajniN”.*/

function reverseString(str){
	var newStr = "";
	for(var i = str.length -1; i >= 0; i--){
		newStr += str[i];
	}
	return newStr;
}
