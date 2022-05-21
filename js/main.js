/* main javascript file */

let value_1 = 0, value_2 = 0, operator = "";

// clear screen
function clear_screen()
{
	document.getElementById("screen").innerHTML = "";
}

// functions for '<' button
function back()
{
	let screen = document.getElementById("screen");

	screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
}

// read number from screen
function read_value()
{
	return parseFloat(document.getElementById("screen").innerHTML);
}

// add to history box
function add_to_history(data)
{
	let box = document.getElementById("history");

	box.innerHTML = box.innerHTML + "<li>" + data + "</li>";
}

// input value function for 0 to 9 and '.'
function value_input(key)
{
	document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + key;
}

// function for operator buttons
function operator_input(key)
{
	value_1 = read_value();

	clear_screen();
	operator = key;
}

// function for equals '=' button
function equals()
{
	value_2 = read_value();
	clear_screen();

	// calculation ------------------------------------------------------
	let result = 0;

	switch(operator)
	{
		case '+':
			result = value_1 + value_2;
		break;

		case '-':
			result = value_1 - value_2;
		break;

		case '/':
			result = value_1 / value_2;
		break;

		case 'x':
			result = value_1 * value_2;
		break;

		default:
			console.log("Invalid Operator");
	}

	add_to_history(value_1 + " " + operator + " " + value_2 + " = " + result);

	// result output
	document.getElementById("screen").innerHTML = result;
}

// functions for '%' button
function percentage()
{
	value_2 = read_value();
	clear_screen();

	// calculation ------------------------------------------------------
	let result = value_1 * (value_2 / 100);

	add_to_history(value_1 + " " + operator + " " + value_2 + "% = " + result);

	// result output
	document.getElementById("screen").innerHTML = result;
}
