let myPromise = new Promise(function(resolve, reject) {
    let n = 5
    if (n > 10) {
        resolve("Promise resolved successfully!")
    }
    else {
        reject("Promise rejected!")
    }
});


myPromise.then(function(successMessage) {
    console.log(successMessage)
})

.catch(function(errorMessage) {
    console.log(errorMessage)
})