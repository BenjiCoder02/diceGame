// Query Selectors 
let p1Score = document.querySelector(".p1Score");
let p2Score = document.querySelector(".p2Score");
let P1 = document.querySelector(".img1");
let P2 = document.querySelector(".img2");
let winner = document.querySelector("h1");

//Images stored in an array
let imgArray = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];


//Default Scores
let scoreP1 = 0;
let scoreP2 = 0;


function generate() {
    var Player1 = Math.floor(Math.random() * 6);
    var Player2 = Math.floor(Math.random() * 6);
    P1.setAttribute("src", imgArray[Player1])
    P2.setAttribute("src", imgArray[Player2])

    if (Player1 > Player2) {
        winner.innerHTML = "Player 1 Wins!"
        scoreP1 += 1;
        p1Score.innerHTML = scoreP1;
        
    }

    else if (Player1 === Player2){
        winner.innerHTML = "It's a tie."
      
    }

    else {
        winner.innerHTML = "Player 2 wins!"
        scoreP2 += 1;
        p2Score.innerHTML = scoreP2;
    }

}


