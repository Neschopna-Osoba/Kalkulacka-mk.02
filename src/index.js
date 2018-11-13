function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  var cislo = 0;
  var arr = new Array();

  for (var i = 0; i < vyraz.length; i++) {
    //cislo
    if ("1234567890".includes(vyraz[i])) {
      cislo *= 10;
      cislo += parseInt(vyraz[i], 10);
    }
    //operator
    else if ("+-*/".includes(vyraz[i])) {
      arr.push(cislo);
      cislo = 0;
      arr.push(vyraz[i]);
    }
  }
  arr.push(cislo);

  // nasobeni, deleni maji prednost
  for (i = 0; i < arr.length; i++) {
    if ("*".includes(arr[i])) {
      arr[i - 1] = arr[i - 1] * arr[i + 1];
      arr.splice(i, 2);
      i--;
    } else if ("/".includes(arr[i])) {
      arr[i - 1] = arr[i - 1] / arr[i + 1];
      arr.splice(i, 2);
      i--;
    }
  }

  //scitani, odcitani
  for (i = 0; i < arr.length; i++) {
    if ("+".includes(arr[i])) {
      arr[i - 1] = arr[i - 1] + arr[i + 1];
      arr.splice(i, 2);
      i--;
    } else if ("-".includes(arr[i])) {
      arr[i - 1] = arr[i - 1] - arr[i + 1];
      arr.splice(i, 2);
      i--;
    }
  }

  document.getElementById("vysledek").innerHTML = "Výsledek je: " + arr[0];
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
