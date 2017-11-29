function colorGuessing(tries=5){
    var colors = ['red', 'green', 'blue', 'yellow', 'brown', 'purple', 'orange', 'white', 'black', 'gray'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log('Color options are red, green, blue, yellow, brown, purple, orange, white, black, or gray. You get 5 tries.');
    
    while(tries > 0){
        tries -= 1;
        guess = prompt('Enter a color');

        if(guess != randomColor){
            console.log('You got it wrong!');
        }

        if(guess != randomColor){
            console.log('Try again!')
        }

        if(tries == 0){
            console.log('You ran out of tries! The correct color was', randomColor);
        }

        if(guess == randomColor){
            console.log('You got it right!')
            process.exit()
        }
    }
}

colorGuessing();