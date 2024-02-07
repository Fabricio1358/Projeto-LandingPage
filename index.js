var SetaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style ="display:none"
    samantha.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex; margin-top: 170px; margin-left: 50px;"
}

function RolarParaEsquerda() {
    samantha.style ="display:none"
    leonardo.style ="display:flex"
    SetaDireita.style ="display:flex"
    SetaEsquerda.style ="display:none; margin-left: 67px;"
}
