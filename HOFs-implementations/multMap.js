function multiMap(arrVals, arrCallbacks) {
  let matchObj = {};
  for (let i = 0; i < arrVals.length; i++) {
    let resCallBacksForEachKey = [];
    for (let j = 0; j < arrCallbacks.length; j++) {
      const operationResult = arrCallbacks[j](arrVals[i]);
      resCallBacksForEachKey.push(operationResult);
    }
    matchObj[arrVals[i]] = resCallBacksForEachKey;
  }
  return matchObj;
}

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);
