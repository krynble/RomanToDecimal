/** 
 * Takes a Roman numeral string and returns it's decimal value
 * @param  string  romanString The Roman Numeral input
 * @return integer             the decimal value or -1 in case of a malformatted string
 */
function romanToDecimal(romanString) {
	var output = 0, i;
	romanString = romanString.toUpperCase();

	/* Check for a few special cases - substractions. */

	// IV = 4
	i = romanString.match(/IV/g);
	output += ( i ? i.length : 0 ) * 4;
	romanString = romanString.replace(/IV/g, '');

	// IX = 9
	i = romanString.match(/IX/g);
	output += ( i ? i.length : 0 ) * 9;
	romanString = romanString.replace(/IX/g, '');

	// XL = 40
	i = romanString.match(/XL/g);
	output += ( i ? i.length : 0 ) * 40;
	romanString = romanString.replace(/XL/g, '');

	// XC = 90
	i = romanString.match(/XC/g);
	output += ( i ? i.length : 0 ) * 90;
	romanString = romanString.replace(/XC/g, '');

	// CD = 400
	i = romanString.match(/CD/g);
	output += ( i ? i.length : 0 ) * 400;
	romanString = romanString.replace(/CD/g, '');

	// CM = 900
	i = romanString.match(/CM/g);
	output += ( i ? i.length : 0 ) * 900;
	romanString = romanString.replace(/CM/g, '');
	

	/* Calculate standard cases */
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

console.log('Output for iv: ' + romanToDecimal('iv'));
console.log('Output for cm: ' + romanToDecimal('cm'));
console.log('Output for mc: ' + romanToDecimal('mc'));
console.log('Output for xlim: ' + romanToDecimal('xlim'));
console.log('Output for mcvi: ' + romanToDecimal('mcvi'));
console.log('Output for abcd: ' + romanToDecimal('abcd'));
console.log('Output for MCCCXXXVII: ' + romanToDecimal('MCCCXXXVII'));


