let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmpassword');
password.onfocus = function() {
    document.getElementById("message").style.display = "block";
}
password.onblur = function() {
    document.getElementById("message").style.display = "none";
}
function validate(){
    const passwordText = password.value;
    console.log(passwordText);
    const confirmPasswordText = confirmPassword.value;
    console.log(confirmPasswordText);
    if(passwordText != confirmPasswordText){
       alert("password doesnt match")
       return false;
    }
    console.log("logged");
    return true;
}
