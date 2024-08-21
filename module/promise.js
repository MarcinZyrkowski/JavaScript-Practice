// syntax
let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);

// When the producing code obtains the result, it should call one of the two callbacks:
// myResolve(result value)
// myReject(error object)

// example
let examplePromise = new Promise((res, rej) => {
  let x = 0;
  if (x >= 0) {
    res("cool");
  } else {
    rej("bad");
  }
});

examplePromise.then((result) => {
  console.log(result);
});

// promise all
// If you have multiple Promises and want to wait for all of them to complete, you can use Promise.all().
// It takes an array of Promises and returns a single Promise that resolves when all of the input Promises
// have resolved or rejects if any of the input Promises reject.
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "foo")
);
const promise3 = 42;

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [3, "foo", 42]
  })
  .catch((error) => {
    console.error(error);
  });
