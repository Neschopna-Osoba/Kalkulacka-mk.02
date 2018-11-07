function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;

  document.getElementById("vysledek").innerHTML = "Výsledek je: " + vyraz;
}

var input = document.getElementById("vyraz");

// Spustí funkci, když uživatel zmáčkne Enter
input.addEventListener("keyup", function(event) {
  // Zruší výchozí funkci klávesy, pokud nějaká existuje
  event.preventDefault();
  // 13 je hodnota klávesy Enter
  if (event.keyCode === 13) {
    solveExpression();
  }
});
