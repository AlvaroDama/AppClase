if (localStorage && localStorage.getItem("nombre")) {
    location.replace("clase.html");
}

function iniciar() {
    if (document.getElementById("txtNom") === "") {
        alert("Introduzca su nombre.");
        return;
    }

    localStorage.setItem("nombre",
        document.getElementById("txtNom").value);
    location.replace("clase.html");
}

document.getElementById("buttOk").addEventListener("click", iniciar);