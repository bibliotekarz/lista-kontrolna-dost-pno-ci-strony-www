function statusOdpowiedzi(pytanie, wynik) {
    var x = document.getElementById(pytanie);
    sessionStorage.setItem(pytanie, wynik);
    console.log(sessionStorage.getItem(pytanie) + " pobrał dane z " + pytanie);
    if (wynik == 1) {
        x.classList.add("ok");
        x.classList.remove("no");
    } else {
        x.classList.remove("ok");
        x.classList.add("no");
    }
    
} 
