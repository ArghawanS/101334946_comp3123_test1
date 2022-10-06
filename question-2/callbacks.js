

// Arghawan Ghulam Siddiq - 101334946

console.log("")
console.log("Question #2: ")
console.log("")

// Resolved Promise method
let resolvedPromise = new Promise((resolve) => {
    // Setting timeout to resolve success message after 500ms
    setTimeout(() => {
        // Setting success message and resolving it
        let success = {'message': 'delayed success!'}
        resolve(success)
    }, 500)
})

// Rejected Promise method
let rejectedPromise = new Promise((reject) => {
    setTimeout(() => {
        let error = {'error': 'delayed exception!'}
        reject(error)
    }, 500)
})

// Handling both promises
resolvedPromise.then(success => {
    console.log(success)
})

rejectedPromise.then(error => {
    console.log(error)
})