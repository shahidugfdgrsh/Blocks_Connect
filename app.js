let points = 0;

// Sign Up Logic
function signUp() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("points", 0);
    window.location.href = "games.html";
}

// Display Username on Games Page
document.addEventListener("DOMContentLoaded", function() {
    const userDisplay = document.getElementById("userDisplay");
    if (userDisplay) {
        userDisplay.textContent = localStorage.getItem("username");
    }
});

// Math Game
function startMathGame() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let answer = num1 + num2;
    let userAnswer = prompt(`Solve: ${num1} + ${num2}`);
    
    if (parseInt(userAnswer) === answer) {
        points += 10;
        alert("Correct! +10 GM Points");
    } else {
        alert("Incorrect! No points awarded.");
    }
    updatePoints();
}

// Trivia Game
function startTrivia() {
    let questions = [
        { q: "What is the capital of France?", a: "paris" },
        { q: "How many legs does a spider have?", a: "8" },
        { q: "What is the square root of 64?", a: "8" }
    ];
    
    let question = questions[Math.floor(Math.random() * questions.length)];
    let userAnswer = prompt(question.q);

    if (userAnswer.toLowerCase() === question.a) {
        points += 10;
        alert("Correct! +10 GM Points");
    } else {
        alert("Incorrect! No points awarded.");
    }
    updatePoints();
}

// Update Points
function updatePoints() {
    document.getElementById("points").innerText = points;
    localStorage.setItem("points", points);
}

// Redeem Logic
function redeem(game) {
    let cost = game === "freefire" ? 100 : game === "pubg" ? 60 : game === "codm" ? 80 : game === "fortnite" ? 1000 : game === "roblox" ? 80 : 0;
    
    if (points >= cost) {
        points -= cost;
        alert(`${game} redeemed successfully!`);
        updatePoints();
    } else {
        alert("Not enough GM Points!");
    }
}

// Redeem Gift Card
function redeemGiftCard(type) {
    let randomCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    alert(`${type} Gift Card Code: ${randomCode}`);
}
