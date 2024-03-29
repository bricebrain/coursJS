/*
  Description :
  Creates an array excluding all given values.
  Arguments :
  1) The array to inspect.
  2) The values to exclude.
  Returns :
  The new array of filtered values.
*/
// Début de votre code
const without = (tab, tab2) => {
  let newTab = [];
  for (let i = 0; i < tab.length; i++) {
    if (tab2.indexOf(tab[i]) === -1) {
      newTab.push(tab[i]);
    }
  }
  return newTab;
};

// Fin de votre code
console.log(without([2, 1, 2, 3], [1, 2])); // Doit afficher `[3]`
