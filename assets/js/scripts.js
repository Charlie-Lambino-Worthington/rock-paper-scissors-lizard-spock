// function for character selection page
function ChangeCharacter(character) {
    switch(character)
    {
        case "leonard":
            document.getElementById("img").src = "assets/images/leonard-hofstadter-png-clipart-removebg-preview.png";
            document.getElementById("name").innerHTML = "Leonard";
            break;
        case "penny":
            document.getElementById("img").src = "assets/images/penny_tbbt.webp";
            document.getElementById("name").innerHTML = "Penny";
            break;
        case "howard":
            document.getElementById("img").src = "assets/images/howard-removebg-preview.png";
            document.getElementById("name").innerHTML = "Howard";
            break;
        case "burnadette":
            document.getElementById("img").src = "assets/images/bernadette_rostenkowski.webp";
            document.getElementById("name").innerHTML = "Bernadette";
            break;
            case "raj":
            document.getElementById("img").src = "assets/images/main-qimg-b45d9a6a900fae521319ecf26b5af862-lq-removebg-preview.png";
            document.getElementById("name").innerHTML = "Raj";
            break;
        case "amy":
            document.getElementById("img").src = "assets/images/89351de7cfeafd3407d78927c95cff8b-removebg-preview.png";
            document.getElementById("name").innerHTML = "Amy";
            break;
        }
    }
    // function for rpsls
    const choices = ["rock", "paper", "scissors", "lizard", "spock"]; 
    const playerScoreDisplay = document.getElementById("characterscore");
    const sheldonScoreDisplay = document.getElementById("sheldonscore");
    const displayResult = document.getElementById("resultDisplay")

    function playGame(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * 6)];
    }