function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  let leva = 0;
  let prava = 0;
  var zmena = true;
  for (let i = 0; i < vyraz.length; i++) {
    if (vyraz.charAt(i) == "+") {
      zmena = false;
    } else if (vyraz.charAt(i) == "-") {
      zmena = false;
    } else if (vyraz.charAt(i) == "*") {
      zmena = false;
    } else if (vyraz.charAt(i) == "/") {
      zmena = false;
    } else {
      if (zmena) {
        leva = leva + parseInt(vyraz.charAt(i));
      } else {
        prava = prava + parseInt(vyraz.charAt(i));
      }
    }
  }
  document.getElementById("vysledek").innerHTML =
    "Výsledek je: " + leva + " " + prava;
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
