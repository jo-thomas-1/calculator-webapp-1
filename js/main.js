/* main javascript file */

let value_1 = 0, value_2 = 0, operator = "";

// input value function for 0 to 9 and '.'
function value_input(key)
{
	document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + key;
}

// function for operator buttons
function operator_input(key)
{
	value_1 = parseInt(document.getElementById("screen").innerHTML);
	document.getElementById("screen").innerHTML = "";
	operator = key;
}

// function for equals '=' button
function equals()
{
	value_2 = parseInt(document.getElementById("screen").innerHTML);
	document.getElementById("screen").innerHTML = "";

	// calculation ------------------------------------------------------
	let result = value_1 + value_2;

	// result output
	document.getElementById("screen").innerHTML = result;
}