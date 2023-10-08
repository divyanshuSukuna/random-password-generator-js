const passwordBox= document.getElementById("password");

const passwordLength=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const numbers="0123456789"
const specialChar="!@#$%^&*?"

const allChars=upperCase + lowerCase + numbers + specialChar;


function  createPassword() {
    let password="";
    while ( password.length < passwordLength){
        password+=allChars[Math.floor(Math.random()*allChars.length)]
    }
    passwordBox.value=password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password Copied");
}




