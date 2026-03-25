
function order(callback){
    console.log("food is ordered");
    setTimeout(() =>{
        
        
        callback()
    },  2000);
    
}
//callback 
function prepare(callback){
    console.log("food is preparing.");
    setTimeout(() => {
        callback()
    }, 2000);
    
}
function del(){
    console.log("order delivered");
    
}

order(() => prepare(() => del()))