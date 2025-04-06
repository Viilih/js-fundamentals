function union(arrays) {
  return arrays.reduce((prevElement, currentElement) => {
    console.log(
      `Current Element: ${currentElement}, PrevElement: ${prevElement}`
    );
    const res = currentElement.filter((el) => !prevElement.includes(el));
    // console.log(res);
    return prevElement.concat(res);
  });
}

console.log(
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
);
