var cards = document.getElementsByClassName("squares");
var chrm = document.getElementsByClassName("charmander")[0];
var sqrtle = document.getElementsByClassName("squirtle")[0];
var blb = document.getElementsByClassName("bulbasaur")[0];

var counter = 0; 
while (counter < cards.length) {
      cards[0].onclick = function() {
        chrm.play();
      }
      cards[1].onclick = function() {
        alert("Sorry, couldn't find Squirtle sound :P");
      }
      cards[2].onclick = function() {
        blb.play(); 
      }
      counter++;
}