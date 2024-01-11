function firstWord(s) {
  // your code here
	if (!s || s.indexOf(' ') === -1) {
        return s;
    }

    // Extract the first word by using substring and indexOf
    return s.substring(0, s.indexOf(' '));
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
