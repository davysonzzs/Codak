//mesma coisa aqui, preferencia criar outros arquivos, mas como é algo pequeno talvez nao precise

//função de lavar para outra aba
function irPara(caminhoDaPagina){
    window.location.href = caminhoDaPagina
}

//função para abrir formulario
function formularioParaGuia(objProfessores){
    const form = document.createElement("form").setAttribute("id", "formularioGuia")
    //select para metodologia
    const selectMetodologia = document.createElement("select").setAttribute("id", "metodologia")
    //dentro do select
    const optAtiva = document.createElement("option").setAttribute("value", 1)
    const optConstrutiva = document.createAttribute("option").setAttribute("value", 2)
    //select para professores
    const selectProfessores = document.createElement("select").setAttribute("id", "professores")
    //dentro do select
    const optProfessores = objProfessores.forEach(o => {
        let option = document.createElement("option").setAttribute(o)
    })

}