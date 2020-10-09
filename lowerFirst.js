/*
  Description :
  Converts the first character of string to lower case.
  Arguments :
  1) The string to convert.
  Returns :
  The converted string.
*/
// Début de votre code

const lowerFirst = (name) => {
  let tab = name.split("");
  let firstChracter = tab.shift().toLowerCase();
  tab.unshift(firstChracter);
  return tab.join("");
};

// Fin de votre code
console.log(lowerFirst("Fred")); // Doit afficher `fred`
console.log(lowerFirst("FRED")); // Doit afficher `fRED`
