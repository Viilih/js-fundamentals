function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
//console.log(testMe()); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function welcomeGreet() {
  console.log("welcome");
}

function delayedGreet() {
  setTimeout(welcomeGreet, 3000);
}
// Uncomment the following line to check your work!
//console.log(delayedGreet()); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function goodBye() {
  console.log("good bye");
}
function helloGoodbye() {
  setTimeout(goodBye, 3000);
  console.log("hello");
}
// Uncomment the following line to check your work!
//helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function hiAgain() {
  console.log("hi again");
}
function brokenRecord() {
  setInterval(hiAgain, 1000);
}
// Uncomment the following line to check your work!
//brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  let count = 0;
  let id = setInterval(() => {
    console.log("hi for now");
    count++;
    if (count >= 5) {
      clearInterval(id);
    }
  }, 1000);
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  let durationTIme = 0;
  let id = setInterval(() => {
    func();
    durationTIme += interval;
    if (durationTIme >= duration) {
      clearInterval(id);
    }
  }, interval);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log("This is the end!");
}
//everyXsecsForYsecs(theEnd, 2000, 20000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 */

function delayCounter(target, wait) {
  function resolutionFunction() {
    let i = 1;
    const id = setInterval(() => {
      console.log(i);
      i++;
      if (i > target) clearInterval(id);
    }, wait);
  }

  return resolutionFunction;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, 2000);
  });

  return promise;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

function debounce(callback, interval) {
  let counter = 0;
  let hasRan = false;
  function closureFn() {
    let id = undefined;
    if (!hasRan) {
      id = setInterval(() => counter++, 1);
      hasRan = true;
      return callback();
    } else {
      if (counter < interval) {
        counter = 0;
        clearInterval(id);
        id = setInterval(() => counter++, 1);
        return undefined;
      } else {
        counter = 0;
        clearInterval(id);
        id = setInterval(() => counter++, 1);
        return callback();
      }
    }
  }
  return closureFn;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() { return 'hi'; }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
