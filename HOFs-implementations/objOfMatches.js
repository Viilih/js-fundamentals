function objOfMatches(array1, array2, callback) {
  let newObj = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) == array2[i]) {
      const key2 = array1[i];
      const value2 = array2[i];
      newObj[key2] = value2;
    }
  }
  return newObj;
}

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);
