//mesma coisa aqui, preferencia criar outros arquivos, mas como é algo pequeno talvez nao precise

//função de lavar para outra aba
function irPara(caminhoDaPagina){
    window.location.href = caminhoDaPagina
}

//função para abrir formulario
function abrirForm(idDaDiv){
    const div = document.getElementById(idDaDiv)
    div.style.display = "block"
}