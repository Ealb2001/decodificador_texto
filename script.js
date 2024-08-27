let textarea = document.querySelector(".text-area");
let textmensagem =document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"



//console.table(matrizCodigo)


//funcao do botao ao clicar

function btnEncriptar(){
    let textEncriptado = encriptar(textarea.value);
    textmensagem.value =textEncriptado;
    textarea.value = "";
}



function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    //percorre a matriz
    for(let i =0;i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){//verfica se a string esta na matriz --booleano
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])//troca todos "valores"
        }
    }
    return stringEncriptada;
}



function btnDesencriptar(){
    let textDesencriptado = desencriptar(textarea.value);
    textmensagem.value =textDesencriptado
    textarea.value = "";
}



function desencriptar(stringdesencriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringdesencriptar = stringdesencriptar.toLowerCase();

    //percorre a matriz
    for(let i =0;i<matrizCodigo.length;i++){
        if(stringdesencriptar.includes(matrizCodigo[i][1])){//verfica se a string esta na matriz --booleano
            stringdesencriptar = stringdesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])//troca todos "valores"
        }
    }
    return stringdesencriptar;
}


//botao copiar e limpar apos texto copiado
function btnCopiar(){
    textcopiado = textmensagem;
    textcopiado.select()
    document.execCommand("copy");
    textmensagem.value = "";

}

