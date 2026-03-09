//validate the password with regex 
function validatePassword(password) {
    // Minimum 8 characters, at least one uppercase letter and one number and 1 special character

    let pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password);
}   
let password = "Abcd1234@";
console.log(validatePassword(password)); // true