function validatePassword(password) {
    // Minimum 8 characters, at least one uppercase, one number, one special character
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (regex.test(password)) {
        console.log("Valid Password");
    } else {
        console.log(" Invalid Password");
    }
}

// Example usage
validatePassword("Abcdef1@");  
validatePassword("abcdef1@");  