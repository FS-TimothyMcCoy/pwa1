/*DUEL FIGHT GAME
3/09/15
PWA1*/


// self-executing function
(function(){
    
    
    console.log("FIGHT!!!");
    //player name
    var playerOneName = ["Captain America", 100 ,20];
    var playerTwoName = ["Scorpion", 100, 20];
    
    //player damage
    /*var player1Damage = 20;
    var player2Damage = 20;*/
    
    //player health
    /*var playerOneHealth = 100;
    var playerTwoHealth = 100;*/
    
    //initiate the round
    var round = 0;
    
    function fight(){
        alert(playerOneName[0]+":"+playerOneName[1]+"  *START*  "+playerTwoName[0]+":"+playerTwoName[1]);
        for ( var i = 0; i < 10; i++) {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOneName[2] * .5;
            var minDamage2 = playerTwoName[2] * .5;
            var f1 = Math.floor(Math.random()*(playerOneName[2]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwoName[2]-minDamage2)+minDamage2);
            
            //Inflict Damage to opponent
            playerOneName[1] -= f1;
            playerTwoName[1] -= f2;
            
            //console log
            console.log(playerOneName[0]+": "+playerOneName[1] + " " + playerTwoName[0]+":"+playerTwoName[1]);
            
            //Check for winner
            var result = winnerCheck();
            console.log(result);
            if (result === "no winner")
            {
                round++;
                alert(playerOneName[0]+":"+playerOneName[1]+"  *ROUND "+round+" OVER"+"*  "+playerTwoName[0]+":"+playerTwoName[1]);
            }else{
                alert(result);
                break;
                
            };
        };
        
        
    };
    function winnerCheck(){
        var result="no winner";
        if (playerOneName[1]<1 && playerTwoName[1]<1)
        {
            result = "You Both Die";
        } else if(playerOneName[1]<1){
            result =playerTwoName[0]+" WINS!!!"
        } else if (playerTwoName[1]<1)
        {
            result = playerOneName[0]+" WINS!!!"
        };
       return result;
    };
    
    

    /******* The code below starts the program **********/
fight();
})();