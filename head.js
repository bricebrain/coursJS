/*
  Description :
  Gets the first element of array.
  Arguments :
  1) The array to query.
  Returns :
  The first element of array.
*/
// Début de votre code

const head = (num) => {
  let head = num.shift();

  return head;
};
// Fin de votre code
console.log(head([2, 3, 4])); // Doit afficher `2`
