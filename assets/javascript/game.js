// set up array of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
			   "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"];

var arrayLength = letters.length;

//set up wines, loses, guess variables
var win = 0;

var lose = 0;

var guessLeft = 10;

var guessSoFar = new Array();

//set up game
document.onkeyup = function(event) 
{

	var userGuess = event.key;

	console.log(userGuess);

	var computerGuess = letters[Math.floor(Math.random() * letters.length)];

	console.log(computerGuess);


	if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || 
		(userGuess === "d") || (userGuess === "e") || (userGuess === "f") || 
		(userGuess === "g") || (userGuess === "h") || (userGuess === "i") || 
		(userGuess === "j") || (userGuess === "k") || (userGuess === "l") || 
		(userGuess === "m") || (userGuess === "n") || (userGuess === "o") || 
		(userGuess === "p") || (userGuess === "q") || (userGuess === "r") || 
		(userGuess === "s") || (userGuess === "t") || (userGuess === "u") || 
		(userGuess === "v") || (userGuess === "w") || (userGuess === "x") || 
		(userGuess === "y") || (userGuess === "z")) 
	{
//game logic
		if (userGuess == computerGuess) 
		{
			win ++;
			guess = 10;
			guessSoFar = new Array();
		}
		else if (guessLeft == 0)
		{
			lose ++;
			guessLeft = 10;
			guessSoFar= new Array();
		}
		else 
		{
			guessLeft --;
			// for (var j = 0; j < 10; j++)
			// guessSoFar[j-1] = userGuess;
			guessSoFar.push(userGuess);
		}

//print results
	var result =
		"<p>Wins: " + win + "</p>"+
		"<p>Loses: " + lose + "</p>"+
		"<p>Guesses Left: " + guessLeft + "</p>"+
		"<p>Guesses So Far: " + guessSoFar + "</p>";

	document.querySelector("#game").innerHTML = result;
	}

	console.log(win);
	console.log(lose);
	console.log(guessLeft);
	console.log(guessSoFar);


};
