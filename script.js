function firstWord(s) {
  // your code here
	if(!s){
		return '';
	}
	const initialWord = s.split(' ');
	let fW = initialWord[0];
	return fW;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
