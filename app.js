var user1;
var user2;
var head = 0;
var tail = 0;

// user1 = Math.floor(Math.random() * (1 + 1));
resetGame();



function headOrTail() {

    // Random color pick between 0 and max i.e. 0 and 1
    var max = 1;
    var diceValue = Math.floor(Math.random() * (max + 1));
    console.log(diceValue);
    if (diceValue === 0) {
        head++;
    }
    else {
        tail++;
    }
    score();
}

function score() {
    
    
    if (user1 === 0) {
        document.getElementById("user1score").innerText = "Score: " + head;
    }
    else {
        document.getElementById("user1score").innerText = "Score: " + tail;
    }

    if (user2 === 0) {
        document.getElementById("user2score").innerText = "Score: " + head;
    }
    else {
        document.getElementById("user2score").innerText = "Score: " + tail;
    }
}

function resetGame() {
    head = 0;
    tail = 0;
    document.getElementById("user1score").innerText = "Score:";
    document.getElementById("user2score").innerText = "Score:";
    user1 = Math.floor(Math.random() * (1 + 1));
    if (user1 === 0) {
        console.log("user1 -> Head");
        document.getElementById("user1").innerText = "User 1 - Head"
        user2 = 1;
        document.getElementById("user2").innerText = "User 2 - Tail"
    }
    else {
        document.getElementById("user1").innerText = "User1 - Tail"
        user2 = 0;
        document.getElementById("user2").innerText = "User2 - Head"
        console.log("user1 -> Tail");
    }
}
