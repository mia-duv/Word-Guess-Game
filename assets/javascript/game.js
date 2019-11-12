$(document).ready(function() {
// create array of words 
var words = [
  "javascript", "browser", 
  "boolean", "react",
  "amazing", "jquery",
  "coffee", "console",
  "loops",
  "variable"
 ];

         
//get users guess
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

for (var i = 0; i < letters.length; i++) {
  var letterBtn = $("<button>");
  letterBtn.addClass("letter-button letter letter-button-color");
  letterBtn.attr("data-letter", letters[i]);
  letterBtn.text(letters[i]);
  $("#buttons").append(letterBtn);
}

  //choose word randomly
 var word = words[Math.floor(Math.random() * words.length)];
 console.log(word);

 var answerArray = [];
for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
}
//check if guess is right 
//if right push to right array
//if wrong push to wrong array 

 
//create underscore based on length of words 
$(".letter-button").on("click", function() {

  var answerArray = $("<div>");
  answerArray.addClass("letter underscore");
})
})

//  var answerArray = [];
//  for (var i = 0; i < word.length; i++) {
//  answerArray[i] = "_";
// }
// var remainingLetters = word.length;

// while (remainingLetters > 0) {
//     // Show the player their progress
//     alert(answerArray.join(" "));
//     // Get a guess from the player
//     var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//     if (guess === null) {
//     // Exit the game loop
//     break;
//     } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//     } else {
//     // Update the game state with the guess
//     for (var j = 0; j < word.length; j++) {
//     if (word[j] === guess) {
//     answerArray[j] = guess;
//     remainingLetters--;
//     }
//     }
//     }
//     }
//  // Show the answer and congratulate the player
//  alert(answerArray.join(" "));
//  alert("Good job! The answer was " + word);