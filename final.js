/*This function rolls a d20 and if the result is a 20
then adds modifiers for combat such as a 'to hit' bonus and damage bonuses
then displays the roll plus the modifiers and their result
runs it agains the enemies' armor class
and if the combination of roll plus modifiers is higher, it'll then roll the dice
for damage with numberSides and quantity and state how much damage was dealt.
Then outputting the results and presenting them to the user.
*/

function attackDice()
{
	
	//Defines the variable for the number of sides to the dice we are rolling
	var numberSides = Number(prompt("Give me the number of sides"));

	//Defines the number of dice we are going to be rolling and summing up
	var quantity = Number(prompt("How many dice of that type are we rolling?"));

	//Initializes the sum of the total to the dice we are rolling
	var sum = 0;

	//Initializes the times we've rolled the dice, producing a random number
	//between 1 and n(n being the number of sides)
	var count = 0;

	//Ask for the damage modifier from the character
	var damMod = Number(prompt("Input the damage modifier for your character"));

	//Ask for to-hit modifier
	var hitMod = Number(prompt("Give me your to-hit"));

	//Rolls the d20 and generates a value
	var crit = 1 + Math.floor(Math.random() * 20);
	
	//Creates a variable for the entire attack roll using the d20 roll plus any modifiers
	var attackRoll = crit + hitMod;
	
	//Asks for the armor class of the enemy. Having an attack roll above this results in a hit
	var armorClass = Number(prompt("What is the enemies armor class?"));

	//Tells the user what their overall attack roll was
	document.write("<h1>Your attack roll  = " + crit + "(d20 roll)" + " + " + hitMod + " resulted in " + attackRoll + "</h1>");
	
	//The counter as to the number of damage dice that are being rolled. As long as there are more to be rolled, there will be more rolled
	while (count<quantity)
	{
		count++;
		var x = 1 + Math.floor(Math.random() * numberSides);
		sum +=x;
		sumMore = sum + damMod;
	}
		//Did the dice roll 20?
		if (crit === 20)
		{
			document.write("<h1>Crit!</h1>");
			document.write("<p>Rolling a crit of " + quantity  + " dice with " + numberSides + " plus doubling the modifers and the damage dice totals dealt " + sum*2 +  damMod*2 + " damage.</p>");
		}
		
		//Did the dice roll a 1
		else if (crit === 1)
		{
			document.write("<h2>You be dead</h2>");
		}
		
		//if the dice rolled neither a 1 or 20, and it still hit, then it will roll the damage dice and add them together
		if (attackRoll >= armorClass && crit !== 20 && crit !== 1)
		{
			document.write("<h2>Rolling " + quantity  + " dice with " + numberSides + " sides plus your damage modifier dealt " + sumMore +  " damage</h2>");
		}
		//if the attack was a miss, then it will give the roll and state that it did miss
		else if(attackRoll <= armorClass && crit !== 20)
		{
			document.write("<h2>Rolling an attack roll of " + attackRoll  + " resulted with a miss against an armor class of " + armorClass + "</h2>");
		}		
	
	//Asks if the user would like to reroll
	var reroll = prompt("would you like to reroll?")
	if (reroll === "yes")
	{
		attackDice();
	}
	else if (reroll === "y")
	{
		attackDice();
	}
	else
	{
		document.write("");
	}
}