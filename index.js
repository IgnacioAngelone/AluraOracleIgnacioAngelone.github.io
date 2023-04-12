function encriptar() {

    var valor_cripto = document.getElementById("textarea_r").value;
    var desvalor_cripto = document.getElementById("textarea_l").value;
    var pendiente = valor_cripto;
    var encriptado = pendiente.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g,"ufat");
    desvalor_cripto.value = encriptado;

    if (pendiente.trim() == "") {
      document.getElementById("textarea_l").style.display = "none";
      document.getElementById("nada"). style.display = "flex"
    } 
    else {
        document.getElementById("nada").style.display = "none"
        document.getElementById("textarea_l").style.display = "flex";
        document.getElementById("textarea_l").value = encriptado;
    }

};

function desencriptar() {

    var valor_descripto = document.getElementById("textarea_r").value;
    var desvalor_descripto = document.getElementById("textarea_l").value;
    var despendiente = valor_descripto;
    var desencriptado = despendiente.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g,"u");
    desvalor_descripto.value = desencriptado;


    if (despendiente.trim() == "") {
      document.getElementById("textarea_l").style.display = "none";
      document.getElementById("nada"). style.display = "flex"
    } 
    else {
        document.getElementById("nada").style.display = "none"
        document.getElementById("textarea_l").style.display = "flex";
        document.getElementById("textarea_l").value = desencriptado;
    }

};

function copy (){

     var textarea = document.getElementById("textarea_l");
     textarea.select();
     document.execCommand("copy");
     window.getSelection().removeAllRanges();

}
