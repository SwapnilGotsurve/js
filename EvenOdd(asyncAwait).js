// even and odd after delay 

function getEvenOdd(num) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
           
            if (num % 2 === 0) {
                resolve(num + " is even")
            } else {
                resolve(num + " is odd")
            }   
        }, 2000)
    })
}

async function fetchData() {
    console.log("Calculating even or odd...")
    let res = await getEvenOdd(5) 
    console.log(res);

}
 fetchData()