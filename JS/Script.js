// Function manipulate the quantitie of each article selected for shooping
function count(operation, qtId, prixA, totalA) {
    // Get the value of the quantities for the seleceted item
    let qt = document.getElementById(qtId);
    let prix = document.getElementById(prixA).innerHTML.split("$").join("");
    let nouveauPrix;
    let Total = document
    .getElementById("totalCart")
    .innerHTML.split("$")
    .join("");
    
    // Switch cases of add or minus item & calculate the total to pa for eache article
    if (operation === "-") {
    if (parseInt(qt.innerHTML) > 0) {
    qt.innerHTML = parseInt(qt.innerHTML) - 1;
    // Calcul prix total d'un article
    nouveauPrix = parseInt(prix) * parseInt(qt.innerHTML);
    document.getElementById(totalA).innerHTML = nouveauPrix + " $";
    document.getElementById("totalCart").innerHTML =
    parseInt(Total) - parseInt(prix) + "$";
    }
    // Cas quantite 0
    else qt.innerHTML = "0";
    
    // console.log(qt.innerHTML);
    } else {
    qt.innerHTML = parseInt(qt.innerHTML) + 1;
    nouveauPrix = parseInt(prix) * parseInt(qt.innerHTML);
    document.getElementById(totalA).innerHTML = nouveauPrix + " $";
    document.getElementById("totalCart").innerHTML =
    parseInt(Total) + parseInt(prix) + " $";
    // console.log(qt.innerHTML);
    }
    }