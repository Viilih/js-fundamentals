const add = function (a, b) {
  return a + b;
};
const nums = [4, 1, 3];
export function reduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    console.log("Before callback", accumulator);
    const res = callback(accumulator, array[i]);
    accumulator = res;
    console.log(
      `Result from the callback: ${res}, Accumulator: ${accumulator}, Array Num: ${array[i]}`
    );
  }
  return accumulator;
}
console.log(reduce(nums, add, 0));
