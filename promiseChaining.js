let chainp = new Promise(function(resolve, reject) {
    resolve(10)
})
chainp.then(function(result) {
    console.log(result)
    return result * 2
}).then(function(result) {
    console.log(result)
    return result * 2
}).then(function(result) {
    console.log(result)
    return result * 2
});