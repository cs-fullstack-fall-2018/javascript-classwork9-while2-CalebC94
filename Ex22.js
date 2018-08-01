// KEY: ALWAYS ADD AT LEAST A BASIC COMMENT ABOUT WHAT THIS IS DOING

function main() {

    nameLoop();
}

function nameLoop(){
    var userInput = prompt("Please enter a name  or just press 'q' to quit");
    while(userInput !== 'q'){

        userInput = prompt("Try again or press 'q' to quit");

    }
}

main();

/*

	KEY: This looks good, but where are your comments?!

	Also, get in the habit of using '===' to test for equality and '!==' to test for inequality.

*/