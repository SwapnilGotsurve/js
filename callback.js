



function welcome(){
    console.log("welcome to zeal");
    
}
function display(name , callback){
    console.log(`hi ${name}`);
    callback();
    
}

display("swapnil", welcome)