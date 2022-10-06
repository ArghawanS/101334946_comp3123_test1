"use strict";

// Arghawan Ghulam Siddiq - 101334946
console.log("");
console.log("Question #2: ");
console.log(""); // Resolved Promise method

var resolvedPromise = new Promise(function (resolve) {
  // Setting timeout to resolve success message after 500ms
  setTimeout(function () {
    // Setting success message and resolving it
    var success = {
      'message': 'delayed success!'
    };
    resolve(success);
  }, 500);
}); // Rejected Promise method

var rejectedPromise = new Promise(function (reject) {
  setTimeout(function () {
    var error = {
      'error': 'delayed exception!'
    };
    reject(error);
  }, 500);
}); // Handling both promises

resolvedPromise.then(function (success) {
  console.log(success);
});
rejectedPromise.then(function (error) {
  console.log(error);
});