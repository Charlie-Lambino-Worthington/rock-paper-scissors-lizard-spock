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
        case "bernadette":
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
    const displayResult = document.getElementById("resultdisplay");

    let sheldonScore = 0;
    let playerScore = 0;

    function playGame(playerChoice) {
        while (playerScore < 10 && sheldonScore < 10) {
            const computerChoiceIndex = Math.floor(Math.random() * choices.length);
            const computerChoice = choices[computerChoiceIndex];
            let result = "";
           
            // Define the outcomes for each choice
            const outcomes = {
                rock: { scissors: "win", lizard: "win", paper: "lose", spock: "lose" },
                paper: { rock: "win", spock: "win", scissors: "lose", lizard: "lose"},
                scissors: { paper: "win", lizard: "win", rock: "lose", spock: "lose" },
                lizard: { spock: "win", paper: "win", scissors: "lose", rock: "lose" },
                spock: { scissors: "win", rock: "win", lizard: "lose", paper:"lose" }
            };
        
            // Check if it's a tie
            if (playerChoice === computerChoice) {
                result = "IT'S A TIE!";
            } else {
                // Determine the winner based on the outcomes
                if (outcomes[playerChoice][computerChoice] === "win") {
                    result = "YOU WIN!";
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                } else  if (outcomes[playerChoice][computerChoice] === "lose")  {
                    result = "SHELDON WINS!";
                    sheldonScore++;
                    sheldonScoreDisplay.textContent = sheldonScore;
                }
           
        }
        if (playerScore === 10) {
            window.location.href = "win.html";
        } else if (sheldonScore ===10){
            window.location.href = "lose.html";
        }  
    
        // Return the result for further use, e.g., displaying it on the page
        
        document.getElementById("resultdisplay").innerHTML = `Sheldon played ${computerChoice}.
         <br>
         You played ${playerChoice}. 
         <br>
         ${result}`
        return result;
        }
    }

    function setCharacter(character) {
        var imgElement = document.getElementById('character'); 
           // Update the header and character score display
    document.getElementById('yourmove').textContent = `Your Move ${character} !`;
    document.getElementById('characternamehere').textContent = `${character}'s score: `;
    document.getElementById('characterscore').textContent = `${playerScore}`;
    document.getElementById('sheldonscore').textContent = ` ${sheldonScore}`;
        switch(character) {
            case "leonard":
                imgElement.src = "assets/images/leonard-hofstadter-png-clipart-removebg-preview.png";
                document.getElementById("name").textContent = "Leonard"; 
                break;
                case "penny":
                    imgElement.src = "assets/images/penny_tbbt.webp";
                    document.getElementById("name").textContent = "Penny"; 
                break;
                case "howard":
                        imgElement.src = "assets/images/howard-removebg-preview.png";
                        document.getElementById("name").textContent = "Howard"; 
                break;
                case "bernadette":
                imgElement.src = "assets/images/bernadette_rostenkowski.webp";
                document.getElementById("name").textContent = "Bernadette"; 
                break;
                case "raj":
                    imgElement.src = "assets/images/main-qimg-b45d9a6a900fae521319ecf26b5af862-lq-removebg-preview.png";
                    document.getElementById("name").textContent = "Raj"; 
                break;
                case "amy":
                        imgElement.src = "assets/images/89351de7cfeafd3407d78927c95cff8b-removebg-preview.png";
                        document.getElementById("name").textContent = "Amy"; 
                break;
        }

    
    // Load the game page
    window.location.href = 'game.html';
    }