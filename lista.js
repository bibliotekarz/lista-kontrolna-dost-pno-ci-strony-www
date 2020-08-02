function statusOdpowiedzi(pytanie, wynik) {
    var x = document.getElementById(pytanie);
    sessionStorage.setItem(pytanie, wynik);

    switch (wynik) {
        case "1":
            x.classList.add("ok");
            x.classList.remove("no", "irrelevant","end", "end::before", "end::after");
            break;
        case "0":
            x.classList.remove("ok", "irrelevant","end", "end::before", "end::after");
            x.classList.add("no");
            break;
        case "2":
            x.classList.remove("no");
            x.classList.remove("no", "ok", "end", "end::before", "end::after");
            x.classList.add("irrelevant");
            break;
        case "3":
            x.classList.remove("no", "ok", "irrelevant");
            x.classList.add("end", "end::before", "end::after");
            break;
        default:
            alert("kombinujemy ;)")
    }
}

function pobierzOdpowiedzi() {

    alert(JSON.stringify(sessionStorage));

}