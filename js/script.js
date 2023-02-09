const textArea = document.querySelector(".text-area");
const textMensaje = document.querySelector(".text-mensaje");
const textCopia = document.querySelector(".btn-copiar")

/*
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/

/*.........................................ENCRIPTAR.................................................*/
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    textMensaje.value = textoEncriptado
    textArea.value = ""; //Para limpiar el texto ingresado
    textMensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let codigoLetras = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a", "ai"], ["u", "ufat"]]
    //console.table(codigoLetras)
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < codigoLetras.length; i++) {
        if (stringEncriptada.includes(codigoLetras[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(codigoLetras[i][0], codigoLetras[i][1])
        }
    }
    return stringEncriptada
}

/*.........................................DESENCRIPTAR.................................................*/
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value)
    textMensaje.value = textoDesencriptado
    textArea.value = ""; //Para limpiar el texto ingresado
    textMensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptado) {
    let codigoLetras = [["enter", "e"], ["ober", "o"], ["imes", "i"], ["ai", "a"], ["ufat", "u"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < codigoLetras.length; i++) {
        if (stringDesencriptado.includes(codigoLetras[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(codigoLetras[i][0], codigoLetras[i][1])
        }
    }
    return stringDesencriptado
}

/*.........................................COPIAR.................................................*/
function btnCopiar() {
    textMensaje.select();
    navigator.clipboard.writeText(textMensaje.value)
    textMensaje.value = "";
    alert("Texto Copiado Correctamente..!")
}