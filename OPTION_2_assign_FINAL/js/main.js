/*
	* Mid Terms for PWA-1
	* Timothy McCoy
	* OPTION 2
	3/26/15
*/
//alert("HELLOOOOOO");



//Initialized variable for the first two objects
var studentsObj =
//Create the first two objects for the program
[
 {name: "Karl", address: '123 University Ave', city: 'Lithia Springs', state: 'GA',gpa: [2.5,3.5,4.0]},
{name: "Katamari", address: '456 University Blvd', city: 'Winter Park', state: 'Fl', gpa:[2.5,3.5,4.0]}
]
//Make function for the the 3rd object being added
var addData = function(name1,address1,city1,state1,gpa1){
    
    var newStudent = {
    name: name1,
    address:address1, 
    city: city1,
    state: state1,
    gpa: gpa1
    };
    //Return the inside variabe so that you can catch it outside the function
    return newStudent;
}
    
//Concantenated the first object's text into the required format
console.log(studentsObj[0].name+"\n"+studentsObj[0].address,studentsObj[0].city,studentsObj[0].state+"\n"+studentsObj[0].gpa);
//Created a variable to catch the addData function
var stuff = addData("Candy", "123 Hello St", "Nh","Topeka", [1,2.5,4]);
//console logged the new function
console.log(stuff);
//Used the push method to add the third object to the initia array
studentsObj.push(stuff);
//console logged the initial object
console.log(studentsObj);



