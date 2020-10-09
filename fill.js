/*
  Description :
  Fills elements of array with value.
  Arguments :
  1) The array to fill.
  2) The value to fill array with.
  Returns :
  The filled array.
*/
// Début de votre code
const fill = (tab, letter) => {
  let count = tab.length;
  let newtab = [];
  for (let i = 1; i <= count; i++) {
    newtab.push(letter);
  }

  return newtab;
};

// Fin de votre code
console.log(fill([1, 2, 3], "a")); // Doit afficher `['a', 'a', 'a']`
