
function guessingGame(tries=5) {
    var number = Math.floor(Math.random() * 100) + 1;

    while (tries > 0) {
        tries -= 1;
        console.log('Try again!');
        guess = parseInt(prompt('Enter a number between 1 and 100.'));

        if(guess < number){
            console.log('You guessed too low!');
        }
        else if(guess > number){
            console.log('You guessed too high!');
        }
        else{
            break;
        }
    }

    if(guess == number){
        console.log('You got it correct!');
        process.exit();
    }

    if(guess != number){
        console.log('You got it wrong! The answer was', number);
        process.exit();
    }
}

guessingGame();
