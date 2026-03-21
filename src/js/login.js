// autenticar login

//login do admin
const loginAdmin = ["Admin", 1234]
//login de teste
const loginUsuario = ["m1opia@exemplo.com", 1234]

//função para autenticar
function authLogin(){
    //tudo isso é para apenas demostrativo
    const inputEmail = document.getElementById("email")
    const inputSenha = document.getElementById("senha")

    //se admin
    if(inputEmail.value == loginAdmin[0] && inputSenha.value == loginAdmin[1]){
        alert("redirencionado para pagina dash")
    } 
    //se usuario
    else if(inputEmail.value == loginUsuario[0] && inputSenha.value == loginUsuario[1]){
        alert("login deu bom")
        window.location.href = "../pages/inicialCodak.html"
    } else{
        alert("senha ou email errados ou usuario não existe")
    }

}

// cadastro
function cadastroAuth(){
    const titulo = document.getElementById("titulo")
    const btnLogin = document.getElementById("btnLogin")
    const pConta = document.getElementById("nConta")
    const aConta = document.getElementById("aConta")

    titulo.textContent = "Cadastro"
    btnLogin.textContent = "Cadastrar"
    btnLogin.setAttribute("onclick", "")
    pConta.textContent = "ja tem conta?"
    aConta.textContent = "entre"
    aConta.setAttribute("onclick", "recarregarPagina()")

    //força digitar algo nos input
    btnLogin.addEventListener('click', () =>{
        const inputEmail = document.getElementById("email").value
        const inputSenha = document.getElementById("senha").value

        //se ele colocar se o usuário existe
        if(inputEmail == "" || inputSenha == ""){
            alert("insira um dado valido")
        } else if(inputEmail == loginAdmin[0] || inputEmail == loginUsuario[0]){
            alert("esse usuário ja existe")
        } else {
            window.location.href = '../pages/inicialCodak.html'
        }
    })

}
// função para volta para o começo
function recarregarPagina(){
    location.reload()
}
