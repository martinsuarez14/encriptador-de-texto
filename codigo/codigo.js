
const mensaje = document.getElementById('input-mensaje');
const botonEncriptar = document.getElementById('boton-encriptar');
const botonDesencriptar = document.getElementById('boton-desencriptar');
const botonCopiar = document.getElementById('boton-copiar');
const salida = document.getElementById('salida');
const botonLimpiar = document.getElementById('boton-limpiar');
const llave = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
const mayusculasYAcentuadas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'á', 'é', 'í', 'ó', 'ú']
const contenedorImagen = document.getElementById('contenedor-img');

salida.classList.add("hide");

function encriptar(mensaje) {
    if (mensaje.value === "") {
        return alert("Debe ingresar un mensaje para poder continuar.");
    } else {
        for (let i = 0; i < mayusculasYAcentuadas.length; i++) {
            if (mensaje.includes(mayusculasYAcentuadas[i])) {
                return alert("El mensaje no debe contener letras maýusculas ni vocales acentuadas.");
            }
        }
    }
    for (let i = 0; i < llave.length; i++) {
        if (mensaje.includes(llave[i][0])) {
            mensaje = mensaje.replaceAll(llave[i][0], llave[i][1]);
        }
    }
    return mensaje;
}

function decodificar(mensaje) {
    if (mensaje.value === "") {
        return alert("Debe ingresar un mensaje para poder continuar.");
    } else {
        for (let i = 0; i < mayusculasYAcentuadas.length; i++) {
            if (mensaje.includes(mayusculasYAcentuadas[i])) {
                return alert("El mensaje no debe contener letras maýusculas ni vocales acentuadas.");
            }
        }
    }
    for (let i = 0; i < llave.length; i++) {
        if (mensaje.includes(llave[i][1])) {
            mensaje = mensaje.replaceAll(llave[i][1], llave[i][0]);
        }
    }
    return mensaje;
}

function copiar() {
    // var copiado = document.getElementById('resultado');
    salida.select();
    document.execCommand('copy');
    mensaje.value = "";
    mostrarOcultar();
}

function buttonEncriptar() {
    mostrarOcultar();
    // contenedorImagen.classList.add("hide");
    // salida.classList.add("show");
    const mensajeEncriptado = encriptar(mensaje.value);
    salida.value = mensajeEncriptado;
}

function buttonDecodificar() {
    const mensajeDecodificado = decodificar(mensaje.value);
    salida.value = mensajeDecodificado;
    mensaje.value = "";
    mostrarOcultar();
}

function limpiarPantalla() {
    mensaje.value = "";
    salida.value = "";
    salida.classList.remove("show");
        salida.classList.add("hide");
        contenedorImagen.classList.add("show");
        contenedorImagen.classList.remove("hide");
}

botonEncriptar.addEventListener('click', buttonEncriptar);
botonDesencriptar.addEventListener('click', buttonDecodificar);
botonCopiar.addEventListener('click', copiar);
botonLimpiar.addEventListener('click', limpiarPantalla);

function desabilitarBoton() {
    if (mensaje.value === "") {
        botonEncriptar.classList.add("disabled");
    }
}

function mostrarOcultar() {
    if (salida.classList.contains("show")) {
        salida.classList.remove("show");
        salida.classList.add("hide");
        contenedorImagen.classList.add("show");
        contenedorImagen.classList.remove("hide");
    } else {
        salida.classList.remove("hide");
        salida.classList.add("show");
        contenedorImagen.classList.remove("show");
        contenedorImagen.classList.add("hide");
    }
}

