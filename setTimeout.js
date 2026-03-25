// function getData(dataId){
// setTimeout(() => {
//     console.log(dataId);
    
// } , 2000);
// }

// getData(1)
// getData(1)
// getData(1)
// getData(1)
// =========================================================


function getData(dataId, callback){
setTimeout(() => {
    console.log(dataId);
    // callback()
    if(callback){
        callback()
    }
} , 2000);
}

getData(1, ()=>{getData(2,()=>{getData(3,()=>{getData(4)})})})
