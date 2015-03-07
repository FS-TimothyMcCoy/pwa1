/**
 * Created by Timothy McCoy on 3/7/15
 */

//FUNCTIONS!!!

var width = 10;
var height = 25;



var total = calcArea(width,height);
calcArea(40,50);
//call function and pass arguments

//create basic function
//catches width and height in the parameters (w,h)
    function calcArea(w,h){
        
        var area = w*h;
        console.log(area);
        return area;
        
        
    }
    
    //Generate a Randum Number
    
    var min = 200;
    var max = 300;
    
    function randomizer(mn,mx){
        var randomNumber = Math.round(Math.random()*(mx-mn)+mn);
        return randomNumber;
    
        
    }
    var ranNum = randomizer(min,max);
    console.log(ranNum);
    
    //ANONYMOUS FUNCTIONS
    
    var width = 10;
    var height = 20;
    
    var areaTotal = function(w,h){
        var area = w*h;
        console.log(area);
        return area;
        
    }
    var total = areaTotal(width,height);
   
    
    

