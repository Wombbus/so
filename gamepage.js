function submit() {
  var y = Math.floor(Math.random() * 10 + 1)
  var x = document.getElementById("guessField").value

  if (x == y) {
    alert("CONGRATS!!!" + PLAYERNAME + "YOU GUESSED IT RIGHT"
      + guess + "GUESS")
    var guess = 1
  }
  else if (x > y) {
    guess++
    alert("OOPS SORRY!! TRY A SMALLER NUMBER")
  }
  else {
    guess++
    alert("OOPS sORRY!! TRY A GREATER NUMBER")
  }
}
function playAgain() {
  y = Math.floor(Math.random() * 10 + 1)
}
