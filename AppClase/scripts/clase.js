var url = "https://alumnoscurso.azure-mobile.net/Tables/clase24";
var arrayLocal = localStorage.getItem("arrayLocal");


if (!localStorage.getItem("nombre")) {
    location.replace("index.html");
}



function guardaDatos() {
    //var ajax = new XMLHttpRequest();
    var pupitre = obtenerObjeto();



/*
    ajax.open("post", url, true);
    ajax.setRequestHeader("Content-Type", "application/json");

    ajax.onreadystatechange = function () {
        if (ajax.readyState == ajax.DONE) {
            if (ajax.status >= 200 && ajax.status < 300)
                pintar();
            else
                alert("Error en inserción.");
        }

    };

    clear();
    ajax.send(JSON.stringify(pupitre));*/
}

function obtenerObjeto() {
    var obj = {
        nombre: document.getElementById("txtNombre").value,
        x: parseInt(document.getElementById("numX").value),
        y: parseInt(document.getElementById("numY").value),
        w: parseInt(document.getElementById("numW").value),
        h: parseInt(document.getElementById("numH").value),
        color: document.getElementById("txtColor").value
    }

    return obj;
}

function clear() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("numX").value = 0;
    document.getElementById("numY").value = 0;
    document.getElementById("numW").value = 0;
    document.getElementById("numH").value = 0;
    document.getElementById("txtColor").value = "";
}

document.getElementById("buttOk").onclick = guardaDatos;

