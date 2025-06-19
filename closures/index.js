// CHALLENGE 1
function createFunction() {
  function greeting() {
    console.log("hello");
  }
  return greeting;
}

// /*** Uncomment these to check your work! ***/
//const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  function printArgument() {
    console.log(input);
  }
  return printArgument;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter("sample");
//printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter("hello");
//printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
//willCounter(); // 1
//willCounter(); // 2
//willCounter(); // 3

//jasCounter(); // 1
//willCounter(); // 4

function addByX(x) {
  function addNumberByX(number) {
    return number + x;
  }

  return addNumberByX;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
//console.log(addByTwo(1)) // => should return 3
//console.log(addByTwo(2)); // => should return 4
//console.log(addByTwo(3)) // => should return 5

const addByThree = addByX(3);
//console.log(addByThree(1)) // => should return 4
//.log(addByThree(2))  // => should return 5

const addByFour = addByX(4);
//console.log(addByFour(4)) // => should return 8
//console.log(addByFour(5)) // => should return 9

// CHALLENGE 4
function once(func) {
  let returnedFunctionCalledXTimes = 0;
  let result = undefined;
  function returnFunctionOnce(num) {
    if (returnedFunctionCalledXTimes === 0) {
      result = func(num);
      returnedFunctionCalledXTimes++;
    }
    return result;
  }
  return returnFunctionOnce;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
//console.log(onceFunc(4));  // => should log 6
//console.log(onceFunc(10));  // => should log 6
//console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 5
function after(count, func) {
  let counterCallback = 0;
  function result() {
    counterCallback++;
    if (counterCallback === count) {
      return func();
    }
  }
  return result;
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log("hello");
};
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait, ...rest) {
  function delayRun() {
    func(...rest);
  }
  setTimeout(delayRun, wait);
}

function rollCall(names) {
  let functionCounter = 0;
  return function newFuntion() {
    for (let i = functionCounter; i < names.length; i++) {
      if (i == functionCounter) {
        console.log(names[i]);
      }
    }
    if (functionCounter === names.length - 1) {
      console.log("Everyone accounted for");
    }
    functionCounter++;
  };
}
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
// rollCaller(); // => should log 'Victoria'
// rollCaller(); // => should log 'Juan'
// rollCaller(); // => should log 'Ruth'
// rollCaller(); // => should log 'Everyone accounted for'

function saveOutput(func, magicWord) {
  let resultObjects = {};
  if (magicWord.length > 0) {
    // return the
  }
  return function output(argumentNumOrString) {
    if (Number.parseInt(argumentNumOrString)) {
      const resultFromArgumentFunction = func(argumentNumOrString);
      resultObjects[argumentNumOrString] = resultFromArgumentFunction;
      return resultFromArgumentFunction;
    } else if (argumentNumOrString === magicWord) {
      return resultObjects;
    }
  };
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let functionCounter = 0;
  return function newFunction() {
    functionCounter++;
    return array[(functionCounter - 1) % array.length];
  };
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ["Fri", "Sat", "Sun"];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  // func(oneArgument) -> The func arg, when invoked will have at least one argument

  function newFunction123(atLeastOneArgument) {
    return func(arg, atLeastOneArgument);
  }
  return newFunction123;
}

// /*** Uncomment these to check your work! ***/
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15
