/**
 * GUESSING GAME:
 *
 * Created By: Timothy McCoy    
 * Date:3/17/15
 * 
 * GUESSING GAME
 */

//Game variables
(function ()
 {   var counter = 0;
    var ranges =
    {
    
        "max": 10,
        "min": 1
        };
        var randomNumber = Math.round(Math.random()*(ranges.max - ranges.min) + ranges.min);
        
        
        var buttonClicker = document.getElementById("buttonClicker").addEventListener("click",btnClicker);
        
        function btnClicker(){
            var  userGuess = document.getElementById("input").value;
            
            
        if (isNaN(userGuess)) {
            alert("The input you have entered is not a number.");
        }
        else if (userGuess === "") {
            document.getElementById("output").innerHTML = "Please do not leave your guess blank.";
        }
        else if (userGuess > 10) {
            document.getElementById("output").innerHTML = "You entered a number higher than 10. Please enter a number between 1 and 10";
        }
        else if (userGuess < 1) {
            document.getElementById("output").innerHTML = "You entered a number less than 1. Please enter a number between 1 and 10";
        }
        else{
          if (counter == 2){
            document.getElementById("output").innerHTML = "Sorry you have failed 3 times. Please refresh the page and try again you failure.";
            document.getElementById("buttonClicker").disabled = true;
            } else{
                
                 
           if (userGuess == randomNumber) {
            counter++;
            document.getElementById("output").innerHTML = "Congrazzles!!! you have successfully guessed the number!"
            
           } else{
            counter++;
            
            document.getElementById("output").innerHTML = "Try again.";
            
           }
        }
        }
        }
        
        

})();
