const passwordGen = (num) => {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = " ";
  let charactersLength = characters.length;
  if (num < 6 && num > 15) {
    return "merci de renseigner un chiffre compris enttre 6 et 15";
  } else {
    for (let i = 0; i < num; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
    }

    return password;
  }
};

console.log(passwordGen(8)); // digVQ4zy
console.log(passwordGen(8)); // digVQ4zy
