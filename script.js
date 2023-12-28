function firstWord(s) {
  // your code here
	if (s === '' || !s.includes(' ')) {
    return s;
  }

  // Extract the first word up to the first space
  const firstSpaceIndex = s.indexOf(' ');
  const result = s.substring(0, firstSpaceIndex);

	return result;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
