function rollDice(){
    var diceValue = parseInt((Math.random() * 6) + 1);
    document.getElementById('diceFace').innerHTML = "You rolled " + diceValue;

    if(diceValue > 3){
        document.getElementById('diceMsg').innerHTML = "You <span class='text-success'>win</span>! :D";
    }
    else{
        document.getElementById('diceMsg').innerHTML = "You <span class='text-danger'>lost</span>! D:";
    }
}
