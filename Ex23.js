function main() {

    password();
}
function password(){
    var passcode = "FILAAAAYYYYEE";
    var userInput = prompt("What is the password?");
    while(userInput != passcode){
        userInput = prompt("Nope. Try again..");
    }
    alert("That is correct");
}

main();