var colorArray = ["blue", "red"];
var user1;
var user2;
var head = 0;
var tail = 0;
var counter = 0;
var x;

resetGame();

function headOrTail() {
    // Random color pick between 0 and max i.e. 0 and 1
    var max = 1;
    var diceValue = Math.floor(Math.random() * (max + 1));
    console.log(diceValue);
    if (diceValue === 0) {
        head++;
        document.getElementById("headtail").innerHTML = "<p id='headtail' style='color: " + colorArray[counter++] + "'>It's: HEADS</p>";
    }
    else {
        tail++;
        document.getElementById("headtail").innerHTML = "<p id='headtail' style='color: " + colorArray[counter++] + "'>It's: TAILS</p>";
    }
    if (counter > 1) {
        counter = 0;
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
    counter = 0;
    document.getElementById("user1score").innerText = "Score:";
    document.getElementById("user2score").innerText = "Score:";
    document.getElementById("headtail").innerText = "";
    user1 = Math.floor(Math.random() * (1 + 1));
    if (user1 === 0) {
        console.log("user1 -> Head");
        document.getElementById("user1").innerText = "Player 1 - Heads"
        user2 = 1;
        document.getElementById("user2").innerText = "Player 2 - Tails"
    }
    else {
        document.getElementById("user1").innerText = "Player 1 - Tails"
        user2 = 0;
        document.getElementById("user2").innerText = "Player 2 - Heads"
        console.log("user1 -> Tail");
    }
    timerStop();
    timerStart();
}

// Timer functions

function timerStart() {
    var countDownDate = new Date();
    countDownDate = countDownDate.setMinutes(countDownDate.getMinutes() + 1);

    // Update the count down every 1 second
    x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for minutes and seconds

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("timer").innerHTML = "Time Left: " + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Time Left: OVER";
            showModal();
        }
    }, 1000);
}

function timerStop() {
    clearInterval(x);
}

// modal dialog

// Get the modal
var modal = document.getElementById("myModal");

// Show modal
function showModal() {
    if (user1 === 0 && head > tail) {
        document.getElementById("modal-body").innerHTML = "<p id='modal-body' class='won'>Congratulations! Player 1 has won the game.</p>"
    }
    else if (user1 === 0 && tail > head) {
        document.getElementById("modal-body").innerHTML = "<p id='modal-body' class='won'>Congratulations! Player 2 has won the game.</p>"
    }
    else if (user1 === 1 && head > tail) {
        document.getElementById("modal-body").innerHTML = "<p id='modal-body' class='won'>Congratulations! Player 2 has won the game.</p>"
    }
    else if (user1 === 1 && tail > head) {
        document.getElementById("modal-body").innerHTML = "<p id='modal-body' class='won'>Congratulations! Player 1 has won the game.</p>"
    }

    if (user2 === 0 && head > tail) {
        document.getElementById("modal-body").innerHTML = "<p id='modal-body' class='won'>Congratulations! Player 2 has won the game.</p>"
    }
    else if (user2 === 0 && tail > head) {
        document.getElementById("modal-body").innerHTML = "<p id='modal-body' class='won'>Congratulations! Player 1 has won the game.</p>"
    }
    else if (user2 === 1 && head > tail) {
        document.getElementById("modal-body").innerHTML = "<p id='modal-body' class='won'>Congratulations! Player 1 has won the game.</p>"
    }
    else if (user2 === 1 && tail > head) {
        document.getElementById("modal-body").innerHTML = "<p id='modal-body' class='won'>Congratulations! Player 2 has won the game.</p>"
    }

   if (head === tail) {
        document.getElementById("modal-body").innerHTML = "<p id='modal-body' class='tied'>Hard Luck! game has been tied.</p>"
    }
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  resetGame();
}
