function myFunction(pytanie, wynik) {
    var x = document.getElementById(pytanie);
    /* if (x.style.display === "none") { */
    if (wynik == 1) {
        /*   x.style.display = "block"; */
        x.classList.add("ok");
        x.classList.remove("no");
    } else {
        /*   x.style.display = "none"; */
        x.classList.remove("ok");
        x.classList.add("no");
    }
} 