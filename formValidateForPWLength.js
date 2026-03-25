let password = "Abcd1939";
let pattern1 = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
if(pattern1.test(password)){
    console.log("valid password");
    
}
else{
    console.log("invalid password");
    
}