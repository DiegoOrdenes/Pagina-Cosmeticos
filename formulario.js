
function validarFormulario() {
    var verificar = true;
    var expRegNombres = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
    var expRegPais = /^[a-záéíóúñ\s]*$/i;
    var expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var expRegUrl = /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i;
    var expRegTelefono = /^([0-9]\s*)*$/;
    var formulario = document.getElementById("formulario");
    var nombres = document.getElementById("nombres");
    var direccion = document.getElementById("direccion");
    var pais = document.getElementById("pais");
    var email = document.getElementById("email");
    var webSite = document.getElementById("web-site");
    var telefono = document.getElementById("telefono");
    var comentario = document.getElementById("comentario");
    if (!nombres.value) {
        alert("Escriba sus nombres por favor.");
        nombres.focus();
        verificar = false;
        return false;
    } else if (nombres.value.split(" ").length < 2) {
        alert("escriba nombre completo");
        nombres.focus();
        verificar = false;
        return false;
    } else if (!expRegNombres.exec(nombres.value)) {
        alert("Este campo admite letras de la a-zA-Z, y no admite espacios en blanco al final.");
        nombres.focus();
        verificar = false;
        return false;

    } else if (!pais.value) {
        alert("Escriba el nombre del pa\u00EDs que nos visita.");
        pais.focus();
        verificar = false;
        return false;
    } else if (!expRegPais.exec(pais.value)) {
        alert("Escriba de que pa\u00EDs nos visita sin n\u00FAmeros ni caracteres especiales como [+ * , . - _ { } ...].");
        pais.focus();
        verificar = false;
        return false;
    } else if (!email.value) {
        alert("Escriba su email.");
        email.focus();
        verificar = false;
        return false;
    } else if (!expRegEmail.exec(email.value)) {
        alert("Escriba un email valido.");
        email.focus();
        verificar = false;
        return false;

    } else if (!telefono.value) {
        alert("Escriba un n\u00famero de tel\u00E9fono.");
        telefono.focus();
        verificar = false;
        return false;
    } else if (!expRegTelefono.exec(telefono.value)) {
        alert("el campo tel\u00E9fono admite n\u00FAmeros y espacios en blanco.");
        telefono.focus();
        verificar = false;
        return false;
    } else if (!comentario.value) {
        alert("el campo comentarios es requerido");
        comentario.focus();
        verificar = false;
        return false;
    } else if (comentario.value.length > 1000) {
        alert("El campo comentarios no puede tener mas de 1000 caracteres.");
        comentario.focus();
        verificar = false;
        return false;
    }

    if (verificar == true) {
        document.formulario.submit();
    }
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
}

function calcular() {
    var contadorChar = document.getElementById("contador-char").innerHTML = 1000 - document.formulario.comentario.value.length;
}
window.onload = function() {
    var botonLimpiar = document.getElementById("limpiar");
    botonLimpiar.onclick = limpiarFormulario;
    var botonEnviar = document.getElementById("enviar");
    botonEnviar.onclick = validarFormulario;
}