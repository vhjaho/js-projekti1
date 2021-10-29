// Kaikki elementit, joilla on sulkemisnappi katoavat näkyvistä painettaessa nappia

var sulje = document.getElementsByClassName("sulje");
var i;
// Käydään läpi kaikki elementit, joilla on sulkemisnappi ja annetaan niille funktio, joka piilottaa ne painettaessa
for (i = 0; i < sulje.length; i++) {
    sulje[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Valitaan kaikki listaukset, jotka ovat suoritettuja ja poistetaan ne
function poista() {
    var p = document.querySelectorAll('.checki');
    for (i = 0; i < p.length; i++) {
        if (p[i].checked) {
            p[i].parentElement.style.display = "none";
        }
    }
}

function uusi() {

    // Luodaan uusi listaus syötekentän pohjalta

    // Luodaan ensin checkbox listaukselle
    var checkBox = document.createElement("input")
    checkBox.className = "checki";
    checkBox.type = "checkbox";
    // Luodaan lista-elementti
    var li = document.createElement("li");
    var x = document.getElementById("syote").value;
    var y = document.createTextNode(x);
    // Liitetään syöte ja checkbox uuteen listaukseen
    li.appendChild(y);
    li.appendChild(checkBox);

    // Tarkistetaan syötteen pituus
    if (x.length < 3) {
        document.getElementById("syote").placeholder = "Syötteen täytyy olla vähintään kolmen merkin pituinen..";
        alert("Syöte on liian lyhyt.");
    } else if (x.length > 15) {
        document.getElementById("syote").placeholder = "Syötteen täytyy olla alle 15 merkkiä pitkä.";
        alert("Syöte on liian pitkä");
    } else {
        // Uusi yksittäinen listaus lisätään koko listaan
        document.getElementById("lista").appendChild(li);
        document.getElementById("syote").placeholder = "";
    }

    // Syötekenttä nollataan
    document.getElementById("syote").value = "";

    // Luodaan listauksille sulkemisnappi
    // Tehdään uusi span-elementti ja ruksi
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    // Annetaan span-elementille sulje-luokka ja liitetään span-elementti ja ruksi yhteen, jonka jälkeen ne liitetään uuteen lista-elementtiin
    span.className = "sulje";
    span.appendChild(txt);
    li.appendChild(span);

    // Liitetään sulkemisnappi kaikkiin uusiin listauksiin
    for (i = 0; i < sulje.length; i++) {
        sulje[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Varastoidaan lista local storageen vanhojen listausten kanssa
    var ulist = document.getElementById("lista").innerHTML;
    ulist = ulist + localStorage.getItem("todolist");
    localStorage.setItem("todolist", ulist);


}