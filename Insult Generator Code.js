var randomBodyParts = ["Face", "Nose", "Hair", "Eyes"];
var randomAdjectives = ["Gross", "Smelly", "Stupid", "Boring"];
var randomWords = ["Rat", "Mouse", "Harlot", "Monkey", "Poop"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
randomInsult;

