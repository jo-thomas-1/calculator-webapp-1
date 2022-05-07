/* main javascript file */

let value_1 = 0, value_2 = 0, operator = "";

// clear screen
function clear_screen()
{
	document.getElementById("screen").innerHTML = "";
}

// input value function for 0 to 9 and '.'
function value_input(key)
{
	document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + key;
}

// function for operator buttons
function operator_input(key)
{
	value_1 = parseInt(document.getElementById("screen").innerHTML);
	clear_screen();
	operator = key;
}

// function for equals '=' button
function equals()
{
	value_2 = parseInt(document.getElementById("screen").innerHTML);
	clear_screen();

	// calculation ------------------------------------------------------
	let result = value_1 + value_2;

	// result output
	document.getElementById("screen").innerHTML = result;
}