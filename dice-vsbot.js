function rollDice(){
    var playerDiceValue = parseInt((Math.random() * 6) + 1);
    document.getElementById('playerDiceFace').innerHTML = "You rolled " + playerDiceValue;

    var botDiceValue = parseInt((Math.random() * 6) + 1);
    document.getElementById('botDiceFace').innerHTML = "The bot rolled " + botDiceValue;

    if(botDiceValue > playerDiceValue){
        document.getElementById('diceMsg').innerHTML = "You <span class='text-danger'>lost</span>! D:";
    }
    else if(botDiceValue==playerDiceValue){
        document.getElementById('diceMsg').innerHTML = "Draw!"
    }
    else{
        document.getElementById('diceMsg').innerHTML = "You <span class='text-success'>won</span>! :D"
    }
}
