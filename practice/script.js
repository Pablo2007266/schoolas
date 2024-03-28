function startGame() {
    var betAmount = document.getElementById("bet-amount").value;
    if (betAmount <= 0) {
        alert("Please enter a valid bet amount.");
        return;
    }

    var playerCards = drawCards();
    var computerCards = drawCards();

    var playerScore = calculateScore(playerCards);
    var computerScore = calculateScore(computerCards);

    var resultText = "Your Cards: " + playerCards.join(", ") + " - Your Score: " + playerScore + "<br>";
    resultText += "Computer's Cards: " + computerCards.join(", ") + " - Computer's Score: " + computerScore + "<br>";

    if (playerScore > computerScore) {
        resultText += "Congratulations! You win " + betAmount + " chips!";
    } else if (playerScore < computerScore) {
        resultText += "Oops! You lose " + betAmount + " chips!";
    } else {
        resultText += "It's a draw!";
    }

    document.getElementById("result").innerHTML = resultText;
}

function drawCards() {
    var cards = [];
    for (var i = 0; i < 3; i++) {
        cards.push(getRandomCard());
    }
    return cards;
}

function getRandomCard() {
    var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

function calculateScore(cards) {
    var score = 0;
    for (var i = 0; i < cards.length; i++) {
        var cardValue = parseInt(cards[i]);
        if (isNaN(cardValue)) {
            if (cards[i] === "A") {
                score += 1;
            } else {
                score += 10; // Face cards (J, Q, K) have a value of 10
            }
        } else {
            score += cardValue;
        }
    }
    return score % 10; // Keep only the last digit of the score
}
