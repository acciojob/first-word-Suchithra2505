function firstWord(s) {
  // your code here
	if (!str || str.indexOf(' ') === -1) {
        return str;
    }

    // Extract the first word by using substring and indexOf
    return str.substring(0, str.indexOf(' '));
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
