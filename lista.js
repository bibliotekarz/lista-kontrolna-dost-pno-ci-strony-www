function statusOdpowiedzi(pytanie, wynik) {
    var x = document.getElementById(pytanie);
    sessionStorage.setItem(pytanie, wynik);
    switch (wynik) {
        case "1":
            x.classList.add("ok");
            x.classList.remove("no", "irrelevant", "end");
            break;
        case "0":
            x.classList.remove("ok", "irrelevant", "end");
            x.classList.add("no");
            break;
        case "2":
            x.classList.remove("no", "ok", "end");
            x.classList.add("irrelevant");
            break;
        case "3":
            x.classList.remove("no", "ok", "irrelevant");
            x.classList.add("end");
            break;
        default:
            alert("kombinujemy ;)")
    }
}



function pobierzOdpowiedzi() {
    const tablica = [];
    document.getElementById('miejsce').innerHTML = "";

    for (var i = 0; i < sessionStorage.length; i++) {
        let pytanie = document.getElementById(sessionStorage.key(i)).innerHTML;
        let wartosc = sessionStorage.getItem(sessionStorage.key(i));

        let stan = "";
        switch (wartosc) {
            case "1":
                stan = "ok\">OK";
                break;
            case "0":
                stan = "no\">NIE";
                break;
            case "2":
                stan = "irrelevant\">nie dotyczy";
                break;
            case "3":
                stan = "stop\">STOP";
                break;
            default:
                alert("kombinujemy ;)")

        }

        let myReg = /\d{1,2}/;

        let nrPytania = pytanie.match(myReg);
        let pytanieGole = pytanie.slice(nrPytania[0].length + 1);

        let divPytania = "d" + nrPytania;
        document.getElementById(divPytania).style.display = "none";

        const tab = [nrPytania, pytanieGole, stan, divPytania];
        tablica.push(tab);
    }

    let linia1 = "<table id=\"wynik\"><tr><th>Lp.</th><th>Pytanie</th><th>Stan</th><th>Odkryj pytanie</th></tr>";
    tablica.sort();

    for (let i = 0; i < tablica.length; i++) {
        const kolumna1 = tablica[i][0][0]; /* tablica w tablicy pierwszy element ma też jako tablicę dlateo 3*[0] */
        const kolumna2 = tablica[i][1];
        const kolumna3 = tablica[i][2];
        const kolumna4 = tablica[i][3];

        linia1 = linia1 + "<tr><td>" + kolumna1 + ".</td><td>" + kolumna2 + "</td><td class=\"" + kolumna3 + "</td><td><a href=\"#" + kolumna4 + "\" onClick=\"odkryjPytanie(" + kolumna4 + ", " + kolumna1 + ");\")>idź do pytania</a></td></tr>";
        console.log(linia1);
    }

    linia1 = linia1 + "</table>";

    document.getElementById('miejsce').innerHTML += linia1;

}


function odkryjPytanie(nrDiv, nr) {
    /* głupie js tworzy zmienne dla każdego obieku html mającego id */
    nrDiv.style.display = "initial";
    kasuj = "py" + nr;
    sessionStorage.removeItem(kasuj);
    pobierzOdpowiedzi();
}

/* :TODO: przerobić na local storage dorobić czyszczenie radio inputów */

function kasujDane(){
    if (confirm("Czy chcesz wyczyścić zapisane dane?")) {
        localStorage.clear()
    }

}
