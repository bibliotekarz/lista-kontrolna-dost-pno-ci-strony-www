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
        let linia = "<table><tr><th>Pytanie</th><th>Stan</th></tr>";
    for (var i = 0; i < sessionStorage.length; i++) {
        let pytanie = document.getElementById(sessionStorage.key(i)).innerHTML;
        let wartosc = sessionStorage.getItem(sessionStorage.key(i));

        let stan = "";
        switch (wartosc) {
            case "1":
                stan = "ok\">OK";
                console.log(pytanie + " OK ");
                break;
            case "0":
                stan = "no\">NIE";
                console.log(pytanie + " NO! ");
                break;
            case "2":
                stan = "irrelevant\">nie dotyczy";
                console.log(pytanie + " nie dotyczy ");
                break;
            case "3":
                stan = "stop\">STOP";
                console.log(pytanie + " STOP ");
                break;
            default:
                alert("kombinujemy ;)")

        }

        /* :TODO: upchać wyniki w tablicę i sortować ją po nrPytania */

        let myReg = /\d{1,2}/;
        let nrPytania = pytanie.match(myReg);
        console.log("nrpytania " + nrPytania);
        linia = linia + "<tr><td>" + pytanie + "</td><td class=\"" + stan + "</td></tr>";
    }

    
    console.log(linia);

    linia = linia + "</table>";
   document.getElementById('miejsce').innerHTML += linia;

}