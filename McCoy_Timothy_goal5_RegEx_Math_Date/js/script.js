(function(){


/*
	==================================================================
	Regular Expressions
	------------------------------------------------------------------
	// Review the slides for Regular Expressions which is the same info as the below

	Example Pattern:
	Date: 	/^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[13-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
	Email: 	/(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})/
	Phone: ^[2-9]\d{2}-\d{3}-\d{4}$
		407-555-5555 

	// special RegEx rules
	. (dot)			this is a wildcard character - it will match anything except for line breaks
	* (asterisk)	when an asterisk precedes a character, it must match it 0 or more times
	+ (plus)		when a plus precedes a character, it must match it 1 or more times
	? (question)	this makes the preceding character optional (0 or 1 matches only)
	^ (caret)		this matches the following character at the start position of a string
	$ (dollar)		this matches the preceding character at the end position of the string
	| (pipe)		this will match the pattern either on the left or the right of the pipe


	// RegEx examples
	/^javascript/  				matches “javascript rules”, but not “i love javascript”
	/javascript$/  				matches “i love javascript” , but not “javascript rules”
	/^javascript$/  			matches only “javascript” and nothing else.
	/yea+h/  					matches “yeah”, “yeaaaah”.. but not “yeh” it would need /yea*h/
	/yea?h/   					matches “yeah” and “yeh”.. but not “yeaaaah”
	/javascript|JavaScript/   	matches “javascript” or “JavaScript”


	// special RegEx rules
	(..)	 	- round brackets define a group of characters that must occur together
				- after the closing bracket, you can then apply modifiers such as * + or ?
	[..]	 	square brackets define a character class - a character class matches any one 
					character inside the brackets - most common to use are:
	[aqz]		match one occurrence of “a”, “q”, or “z”, the same as (a|q|z)
	[a-z]		would match any lower case letter
	[A-Z]		would match any upper case letter
	[a-zA-Z]	would match any letter
	[^..]		any one character not between the brackets - [^a-zA-Z]  would match any non-letter
 */

console.log('------------ Regular Expressions -------------------');

//var email = /^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/ ;

/******************************************************************************
STUDENT ACTIVITY

	1.  Write a RegEx for a basic name (containing only letters)

		Answer: /^[a-zA-z]+$/

	2.  What are the possible answers for this: /[Jj]ava[Ss]cript/

		Answer: 

	3. 	What are the possible answers for this: /^(Java)?Script$/

		Answer: 

	4. 	Describe the possible answer for this: /^[a-zA-Z\^\-\.]+$/

		Answer: 

	5.	Combining character sets can create sequences of matches.
		
		Describe the possible answers for this: /^[a-zA-Z]+[0-9]$/ 	

		Answer: 

----------------------------------------------------------------------------- */

/*
	most often, validation sets consist of multiple classes like the above

	//methods
	exec()		RegExp.exec(string): apply RegExp to the given string, and returns the matched information or null
	test()		    RegExp.test(string): tests for a match in its string parameter - returns a boolean
	match()		string.match(RegExp): match given string with the RegEx
	search()	    string.search.(RegExp): matches RegExp with string and returns the index of the beginning of
					the match if found, -1 if not
	replace()	string.replace.(RegExp): matches the given string, and returns the edited string
	split()		string.split.(RegExp): cuts a string into an array, making cuts at matches
*/

var email = /(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})/;
var str ="my personal email is kjrohr@gmail.com but my school email is kjrohr@fullsail.edu";
console.log(email.exec(str));

console.log(email.test(str));

/* 
	// RegExp metaCharacters
	\s	matches any whitespace character, similar to  [ ]
	\S	matches any non-whitespace, similar to  [^ ]
	\d	matches any digit, similar to  [0-9]
	\D	matches any non-digit, similar to  [^0-9]
	\w	matches any “word” letter, similar to  [a-zA-Z0-9_]
	\W	match any non-”word” letter, similar to  [^a-zA-Z0-9_]


	// RegExp variations
	{n, m}	matches at least n, but no more than m
	{n,  }	matches at least n
	{n}		matches exactly n

	/^\d{5}$/ - could match a 5 digit zipcode (and only 5 digits)
 	/^[a-zA-Z]{2,3}$/ - would match 2 to 3 letters only 
*/

// phone number string that matches the RegEx




/******************************************************************************
STUDENT ACTIVITY

	Write a RegEx for a phone number to match the following formats:
	1.  Format: (123) 456-7890 | 123-456-7890

		Answer: 

	2.  Format: (573)8841878 | 573-884-1234 | 573 234 1256

		Answer: 
	
----------------------------------------------------------------------------- */


/*	==================================================================
	Math Methods
	------------------------------------------------------------------
		
	The Math object allows you to perform mathematical tasks.

	popular math methods: floor( ), max( ), min( ), random( ), round( )
*/

    console.log('------------ Math Methods -------------------');

  
  

/*	==================================================================
	Date Methods
	------------------------------------------------------------------
		
	The date object is used to work with dates and times
	Date objects can be created with a “new Date( )” 

	popular date methods: date( ), getFullYear( ), setFullYear( ), getTime( ), getDay( )

*/

    console.log('------------ Date Methods -------------------');
	console.log(new Date());
	var d = new Date();
	
	console.log(d.getFullYear());
 	console.log(d.getDate());
	console.log(d.getHours());


})(); // end wrapper