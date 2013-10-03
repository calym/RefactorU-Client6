

//pluralize with a ternary operator
var pluralize = function(word,number) {
return (number === 1) ?  word : word + 's'
};



//original vicitm function
var victim = {};

var getVictimInfo = function() {
 victim.name = prompt("Please enter your name:");
 victim.phone = prompt("Please enter your phone number:");
 victim.street = prompt("Please enter your street:");
};

getVictimInfo();

alert('Thank you! Victim entered: \n' + 
 victim.name + ", " + 
 victim.phone + ", " + 
 victim.street);

//this is not functional because it doesn't have a return value
//this is not functional because it references a global variable




var getVictimInfo = function() {
	var name = prompt("Please enter your name:");
	var phone = prompt("Please enter your phone number:");
	var street = prompt("Please enter your street:");
	var victim = {"Name":name, "Phone":phone, "Street":street};
	return victim;
};

var entry = getVictimInfo();


alert('Thank you! Victim entered: \n' + 
entry.Name + ", " + 
entry.Phone + ", " + 
entry.Street);

// Write a function which removes falsey values from an array. 
// A falsey value is one which evaluates to false when type coerced, 
// which are the following: 0, null, "" (empty string), undefined, NaN, false.
// Write two versions of the function: one that uses side effects and one that is pure.

var falseyArr = [0,null,"hi!", (3===4),undefined,NaN];


var nonPure = function(myArray) {
	var newArray = [];
	for (var i = 0; i < falseyArr.length; i++) {
	  if (Boolean(falseyArr[i])) {
	    newArray.push(falseyArr[i]);
	    console.log(newArray);
	  }
	 }
}

var findFalsey = function(myArray) {
	var newArray = [];
	for (var i = 0; i < falseyArr.length; i++) {
	  if (Boolean(falseyArr[i])) {
	    newArray.push(falseyArr[i]);
	    return newArray;
	  }
	 }
}

