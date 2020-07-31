function statusOdpowiedzi(pytanie, wynik) {
    var x = document.getElementById(pytanie);
    sessionStorage.setItem(pytanie, wynik);
    console.log(sessionStorage.getItem(pytanie) + " pobrał dane z " + pytanie);
    if (wynik == 1) {
        x.classList.add("ok");
        x.classList.remove("no");
        x.classList.remove("irrelevant");
    } else if (wynik == 0) {
        x.classList.remove("ok");
        x.classList.add("no");
        x.classList.remove("irrelevant");
      }else {
        x.classList.remove("no");
        x.classList.remove("ok");
        x.classList.add("irrelevant");
    }
    
} 

function pobierzOdpowiedzi(){

    alert( JSON.stringify(localStorage));
        
        
    console.log("po pętli");
/*
    let licznik = 0;
    let lokata ="";
    console.log(sessionStorage.length);
    while (licznik <= sessionStorage.length) {
        lokata = "py"+licznik;
        console.log("lokalizacja: " + lokata)
        let z = sessionStorage.key(lokata);
        console.log("wartość z : " + z);
        let animal = sessionStorage.getItem(z);
        console.log("pokaz animal: " + animal);
        
        licznik++;
    }
    */
}