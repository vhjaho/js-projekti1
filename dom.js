// Kaikki elementit, joilla on sulkemisnappi katoavat näkyvistä painettaessa nappia

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function uusi() {

    // Luodaan uusi listaus syötekentän pohjalta, mikäli syöte ei ole tyhjä

    var li = document.createElement("li");
    var x = document.getElementById("syote").value;
    var y = document.createTextNode(x);
    li.appendChild(y);

    if (x.length < 3) {
        document.getElementById("syote").placeholder = "Syötteen täytyy olla vähintään kolmen merkin pituinen..";
        alert("Syöte on liian lyhyt.");
    } else {
        // Uusi yksittäinen listaus lisätään koko listaan
        document.getElementById("lista").appendChild(li);
        document.getElementById("syote").placeholder = "";
    }

    // Syötekenttä nollataan
    document.getElementById("syote").value = "";

    // Luodaan listauksille sulkemisnappi
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Liitetään sulkemisnappi kaikkiin uusiin listauksiin
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Varastoidaan lista local storageen
    list = document.getElementById("lista");
    localStorage.setItem("todolist", list.innerHTML);

}