

	/********************************** BATTLESHIP! ***********************************
	The board is 7 spaces long (zero counts as a space) and a ship is 3 spaces long
	User can pick a number between 0-6 and try to hit the ship
	If the user hits the ship, they are alerted. They have to "hit" all three spaces 
	occupied by the ship to "SINK" the battleship.
	Once the ship is sunk, they win and are alerted to how many guesses it took so
	SINK THE BATTLESHIP!
	**********************************************************************************/
	
	
//CREATE VAR's for 3 LOCATIONS ON THE BOARD
var location1 = Math.floor(Math.random() * 5);
var location2 = Math.floor(Math.random() * 5);
var location3 = Math.floor(Math.random() * 5);


//CREATE VARIABLES FOR INITIAL GUESS, HITS, & GUESSES (TALLY SHOULD START AT 0)
var guess;
var hits = 0;
var guesses = 0;


//CREATE VARIABLE TO DETERMINE IF SUNK IS TRUE OR FALSE (INITIATE AS FALSE)

var isSunk = false;

//CREATE A WHILE LOOP THAT WILL RUN UNTIL THE SHIP IS SUNK
while (isSunk == false){



	//PROMPT USER TO GUESS A NUMBER ON THE BOARD (0-6)
	guess = prompt("Where do you think their ship is on the board? (0-6)");
        
	
	
	//CREATE A CONDITIONAL STATEMENT TO VALIDATE THE USER'S GUESS
	//IS THE GUESS BETWEEN 0 AND 6?
        if (guess < 0 || guess > 6) {
            alert("Please enter a valid number");
            guess = prompt("Enter a number from 0-6");
        
	
	
	
	//INSIDE OF THE ELSE STATEMENT, TALLY GUESSES FOR EACH ATTEMPT
}else{
    guesses = guesses++;

	
	
	
		//USE A NESTED CONDITIONAL INSIDE OF THE ELSE STATEMENT
		//IF THE USER'S GUESS MATCHES ANY OF THE SHIPS OCCUPIED SPACES, ALERT "HIT"
                
                
                if (guess == Location1 || guess == location2 || guess == location3) {
                    alert("Hit!")
                    //Tally hits by adding one each time the loops
                

	
	
			//TALLY HITS BY ADDING ONE EACH TIME THE LOOP RUNS
			hits = hits +1;
			
			
			//CONDITION - IF USER REACHES 3 HITS, THEN THE SHIP IS SUNK
		
		if (hits == 3) {
                    isSunk = true;
                    alert("You sank my battleship!!");
                }
		
			//ELSE ALERT MISS!
}else{
    alert("Miss!!");
    }
        }
            }
			
			
//CREATE VAR AND ALERT FOR STATS (YOU TOOK ? GUESSES TO SINK THE BATTLESHIP)



			////////////// ON YOUR OWN ///////////////////

// 	Try to replace location 1 with a random location
// 	USE: var randomLoc = Math.floor(Math.random() * 5); FOR YOUR FIRST VAR
