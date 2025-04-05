function intersection(arrays) {
  return arrays.reduce((acc, currentArray) => {
    const res = currentArray.filter((element) => acc.includes(element));
    console.log(res, currentArray, acc);
    return res;
  });
}

// The idea here is: On the arrays.reduce:  during my first iteration, since I didn't give the initial value, the acc variable starts with arrays[0], the array [5, 10, 15, 20]
// Then, I filter my current element (array) where i just return the element where the acc contains one of the elements of the (acc or previous array)

// First Iteration: acc = [5, 10, 15, 20]; currentArray = [5, 10, 15, 20]; filter returns: [5, 10, 15, 20]
// Second Iteration: acc = [5, 10, 15, 20];  current Array = [15, 88, 1, 5, 7]; filter returns: [5,15]
// Third Iteration: acc = [5,15]; current Array = [1, 10, 15, 5, 20]; filter returns: [5,15]

// IMPORTANT: The acc (or accumulator if you prefer) is the result from the previous call to the callback function! It's through that our Array, in this case, is in fact being REDUCED
console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);
