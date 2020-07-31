function statusOdpowiedzi(pytanie, wynik) {
    var x = document.getElementById(pytanie);
    sessionStorage.setItem(pytanie, wynik);

    switch (wynik){
        case "1":
            x.classList.add("ok");
            x.classList.remove("no");
            x.classList.remove("irrelevant");
            break;
        case "0":
            x.classList.remove("ok");
            x.classList.add("no");
            x.classList.remove("irrelevant");
            break;
        case "2":
            x.classList.remove("no");
            x.classList.remove("ok");
            x.classList.add("irrelevant");
            break;
        default:
            alert("kombinujemy ;)")    
    }
} 

function pobierzOdpowiedzi(){

    alert( JSON.stringify(sessionStorage));
        
    }