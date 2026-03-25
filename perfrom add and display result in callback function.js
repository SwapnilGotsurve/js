



function addition(a, b, callback){

   let result = a + b
    callback( result)
    
}
function result( result){
    console.log(`Result = ${result}`);
    // callback();
    
}

addition(5,10, result)