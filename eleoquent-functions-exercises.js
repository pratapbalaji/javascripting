function countBs(stringInput) {
  return countChart(stringInput,"B")
  }

function countChart(stringInput,stringCharacter) {
  var counterChars=0;
  for (var i=0;i<stringInput.length; i++) {
    if (stringInput.charAt(i)==stringCharacter)
        counterChars = counterChars+1;
  }
  return counterChars
}

console.log(countBs("BBC"));
console.log(countChart("kakkerlak","k"));

