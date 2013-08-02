function romanToDecimal(romanString) {
	var output = 0, i;
	romanString = romanString.toUpperCase();
	for (i = 0; i < romanString.length; i++) {
		switch(romanString[i]) {
			case 'M':
				output += 1000;
			break;
			case 'D':
				output += 500;
			break;
			case 'C':
				output += 100;
			break;
			case 'L':
				output += 50;
			break;
			case 'X':
				output += 10;
			break;
			case 'V':
				output += 5;
			break;
			case 'I':
				output += 1;
			break;
			default:
				return -1;
			break;
		}
	}
	return output;
}

console.log('Output for xlim: ' + romanToDecimal('xlim'));
console.log('Output for mcvi: ' + romanToDecimal('mcvi'));
console.log('Output for abcd: ' + romanToDecimal('abcd'));
console.log('Output for MCCCXXXVII: ' + romanToDecimal('MCCCXXXVII'));


