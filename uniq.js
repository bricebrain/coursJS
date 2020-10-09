/*
  Description :
  Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.
  Arguments :
  1) The array to inspect.
  
  Returns :
  The new duplicate free array.
*/
// Début de votre code

const uniq = (tab) => {
  //sort tab
  let tabSort = tab.sort((a, b) => {
    return a - b;
  });
  let newTab = [];

  for (let i = 0; i < tabSort.length; i++) {
    {
      if (i === 0) {
        newTab.push(tabSort[0]);
      } else {
        if (tabSort[i] !== tabSort[i - 1]) {
          newTab.unshift(tabSort[i]);
        }
      }
    }
  }
  return newTab;
};

// Fin de votre code
console.log(uniq([2, 1, 2])); // Doit afficher `[2, 1]`
