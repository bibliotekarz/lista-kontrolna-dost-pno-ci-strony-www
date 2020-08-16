function statusOdpowiedzi(pytanie, wynik) {
    var x = document.getElementById(pytanie);
    localStorage.setItem(pytanie, wynik);
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

    for (var i = 0; i < localStorage.length; i++) {
        let pytanie = document.getElementById(localStorage.key(i)).innerHTML;
        let wartosc = localStorage.getItem(localStorage.key(i));

        let klasa = "";
        let opis = "";
        switch (wartosc) {
            case "1":
                klasa = "ok";
                opis = "OK";
                break;
            case "0":
                klasa = "no";
                opis = "NIE";
                break;
            case "2":
                klasa = "irrelevant";
                opis = "nie dotyczy";
                break;
            case "3":
                klasa = "stop";
                opis = "STOP";
                break;
            default:
                alert("kombinujemy ;)")

        }

        let myReg = /\d{1,2}/;

        let nrPytania = pytanie.match(myReg);
        let pytanieGole = pytanie.slice(nrPytania[0].length + 1);

        let divPytania = "d" + nrPytania;
        document.getElementById(divPytania).style.display = "none";

        const tab = [nrPytania, pytanieGole, klasa, opis, divPytania];
        tablica.push(tab);
    }


    let linia1 = "<table id=\"wynik\"><tr><th>Lp.</th><th>Pytanie</th><th>Stan</th><th>Odkryj pytanie</th></tr>";
    tablica.sort();

    for (let i = 0; i < tablica.length; i++) {
        const kolumnaNrPytania = tablica[i][0][0]; /* tablica w tablicy pierwszy element ma też jako tablicę dlateo 3*[0] */
        const kolumnaPytanieGole = tablica[i][1];
        const kolumnaKlasa = tablica[i][2];
        const kolumnaOpis = tablica[i][3];
        const kolumnadivPytania = tablica[i][4];

        linia1 = linia1 + "<tr><td>" + kolumnaNrPytania + ".</td><td>" + kolumnaPytanieGole + "</td><td class=\"" + kolumnaKlasa + "\">" + kolumnaOpis + "</td><td><a href=\"#" + kolumnadivPytania + "\" onClick=\"odkryjPytanie(" + kolumnadivPytania + ", " + kolumnaNrPytania + ");\")>idź do pytania</a></td></tr>";
        console.log(linia1);
    }

    linia1 = linia1 + "</table>";

    document.getElementById('miejsce').innerHTML += linia1;

}


function odkryjPytanie(nrDiv, nr) {
    /* głupie js tworzy zmienne dla każdego obieku html mającego id */
    nrDiv.style.display = "initial";
    kasuj = "py" + nr;
    localStorage.removeItem(kasuj);
    pobierzOdpowiedzi();
}

function kasujDane(){
    if (confirm("Czy chcesz wyczyścić zapisane dane?")) {
        localStorage.clear()
    }
    
    let zaznaczone = document.querySelectorAll("INPUT[type='radio']");
    for (let zaznaczony of zaznaczone){
        zaznaczony.checked = false;
    }

     let zaznaczoneDivy = document.querySelectorAll("p.pytanie");
     for (let zaznaczonyDiv of zaznaczoneDivy){
        zaznaczonyDiv.classList.remove("end", "no", "ok", "irrelevant");
        location.reload();
     }

}

