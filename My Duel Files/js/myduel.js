/*DUEL FIGHT GAME
3/09/15
PWA1*/


// self-executing function
(function(){
    
    
    console.log("FIGHT!!!");
    //player name
    var playerOne = {
        
        name: "Captain America",
        damage : 20,
        health: 100
        
    };
    
    
    var playerTwo = {
        name: "Scorpion",
    damage: 20,
    health: 100
    
    };
    
    //player damage
    /*var player1Damage = 20;
    var player2Damage = 20;*/
    
    //player health
    /*var playerOneHealth = 100;
    var playerTwoHealth = 100;*/
    
    //initiate the round
    var round = 0;
    
    function fight(){
        /*(playerOne[0]+":"+playerOneName[1]+"  *START*  "+playerTwoName[0]+":"+playerTwoName[1]);*/
        for ( var i = 0; i < 10; i++) {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne.health * .5;
            var minDamage2 = playerTwo.health * .5;
            var f1 = Math.floor(Math.random()*(playerOne.health-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo.health-minDamage2)+minDamage2);
            
            //Inflict Damage to opponent
            playerOne.damage -= f1;
            playerTwo.damage -= f2;
            
            //console log
            console.log(playerOne.name+": "+playerOne.health + " " + playerTwo.name+":"+playerTwo.health);
            
            //Check for winner
            var result = winnerCheck();
            console.log(result);
            if (result === "no winner")
            {
                round++;
                /*alert(playerOneName[0]+":"+playerOneName[1]+"  *ROUND "+round+" OVER"+"*  "+playerTwoName[0]+":"+playerTwoName[1]);*/
            }else{
                /*alert(result);*/
                break;
                
            };
        };
        
        
    };
    function winnerCheck(){
        var result="no winner";
        if (playerOne.health<1 && playerTwo.health<1)
        {
            result = "You Both Die";
        } else if(playerOne.health<1){
            result =playerTwo.name+" WINS!!!"
        } else if (playerTwo.health<1)
        {
            result = playerOne.name+" WINS!!!"
        };
       return result;
    };
    console.log("program");
    
    //document.getElementByClassName(".buttonblue").onclick = fight();
    
    

    /******* The code below starts the program **********/
fight();
})();