function majority(array, callback) {
  let countTrue = 0;
  let countFalse = 0;
  for (let i = 0; i < array.length; i++) {
    callback(array[i]) ? countTrue++ : countFalse++;
  }

  return countTrue > countFalse;
}
const odd = function (num) {
  return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], odd)); // should log: true
console.log(majority([2, 3, 4, 5], odd)); // should log: false
