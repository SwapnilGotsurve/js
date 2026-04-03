
async function fetchData() {
    console.log("Fetching data...")
    let result = await getData()
    console.log(result)
}
function getData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Data received")
        }, 2000)
    })
}
fetchData()


