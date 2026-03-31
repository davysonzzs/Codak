//variveis onde ficam stages
const css = {
    stage1: [
    ` <h1 onclick="abrirForm('stage1Css')" style="cursor: pointer;">Stage 1: Introdução</h1>
    <span id="stage1Css" style="display: none; margin: 15px 0;">
    <h2> CSS é a linguagem que usamos para estilizar uma página da Web. </h2> <br>
    CSS significa Cascading Style Sheets (Folhas de Estilo em Cascata). <br>
    O CSS descreve como os elementos HTML devem ser exibidos na tela. papel, ou em outros meios <br>
    O CSS economiza muito trabalho. Ele pode controlar o layout de várias páginas da web simultaneamente <br>
    Folhas de estilo externas são armazenadas em arquivos CSS. <br>

    <h2> Por que usar CSS? </h2> <br> 
    O CSS é usado para definir estilos para suas páginas da web, <br>
    incluindo o design e o layout. e variações na exibição para diferentes dispositivos e tamanhos de tela. <br>

    Exemplo de CSS <br>
    <pre>
    <code>
    body {
    background-color: lightblue;
    }

    h1 {
    color: white;
    text-align: center;
    }

    p {
    font-family: verdana;
    font-size: 20px;
    }
    </code>
    </pre>
    </span> <br>
`, '<a href="https://www.w3schools.com/css/css_intro.asp"  target="_blank">documentação</a> <br>', "sem exercio disponivel <br>"],
    stage2: [
        `
        <h1 onclick="abrirForm('stage2Css')" style="cursor: pointer;">Stage 2: Seletores</h1>
        <span id="stage2Css" style="margin; 15px 0; display: none;> 
        Os seletores CSS são usados ​​para "encontrar" (ou selecionar) os elementos HTML que você deseja selecionar. quero estilizar. <br>
        Podemos dividir os seletores CSS em cinco categorias: <br>

        Seletores simples (selecionam elementos com base em nome, ID e classe) <br>
        Seletores combinatórios (selecionar) elementos baseados em uma relação específica entre eles)<br>
        Seletores de pseudo-classe (selecionam elementos com base em um determinado estado)<br>
        Seletores de pseudo-elementos (selecionar) e estilizar uma parte de um elemento)<br>
        Seletores de atributos (selecione elementos com base em um atributo ou valor de atributo)<br>

        Exemplo<br>

        Aqui, todos os elementos <p> da página serão Alinhado ao centro, com texto na cor vermelha:<br>
        <pre>
        <code>
        p {
        text-align: center;
        color: red;
        }
        </code>
        </pre>
        <br>
        <h2>O seletor de ID CSS</h2><br>

        O idO seletor utiliza o atributo id de um elemento HTML para selecionar um elemento específico.<br>
        O ID de um elemento é único dentro de uma página, portanto o seletor de ID é costumava ser Selecione um elemento único!<br>
        Para selecionar um elemento com um ID específico, escreva o caractere hash (#), seguido de o ID do elemento. <br>

        Exemplo<br>
        <pre>
        <code>
        #para1 {
        text-align: center;
        color: red;
        }
        </code>
        </pre>
        <br>
        <h2>O seletor de classe CSS</h2><br>

        O classO seletor seleciona elementos HTML com um atributo de classe específico.<br>
        Para selecionar elementos com uma classe específica, escreva um ponto (.) seguido do caractere. nome da classe. <br>

        Exemplo<br>
        <pre>
        <code>
        .center {
        text-align: center;
        color: red;
        }
        </code>
        </pre>
        </span> <br>
        `, '<a href="https://www.w3schools.com/css/css_selectors.asp"  target="_blank">documentação</a><br>' , '<a href=" https://pt.anotepad.com/note/read/qiqkh8h5"  target="_blank">Exercicio</a>'],
}

const js = {
    stage1: [
        `
        <h1 onclick="abrirForm('stage1js')" style="cursor: pointer;">Stage 1: Introdução</h1><br>
        <span id="stage1js" style="display: none; margin: 15px 0">
        <h2>O que o JavaScript pode fazer?</h2> <br>
        JavaScript é a linguagem de programação da web.<br>
        Ele pode calcular, manipular e validar dados.<br>
        Ele pode atualizar e alterar tanto HTML quanto CSS. <br>

        Um dos muitos métodos HTML em JavaScript é getElementById(). <br>

        O exemplo abaixo "encontra" um elemento HTML (com id="demo"), e altera o conteúdo do elemento (innerHTML) para "Olá JavaScript": <br>
        <pre>
        <code>
        document.getElementById("demo").innerHTML = "Hello JavaScript";
        </pre>
        </code>

        JavaScript pode alterar estilos HTML (CSS) <br>

        Alterar o estilo de um elemento HTML é uma variante de alterar o próprio HTML. atributo: <br>
        <pre>
        <code>
        document.getElementById("demo").style.fontSize = "35px";
        </code>
        </pre>
        </span> 
        `, '<a href="https://www.w3schools.com/js/js_intro.asp"  target="_blank">documentação</a><br>', "Sem exercicio Disponivel <br>"],
    Stage2:[
        `
        <h1 onclick="abrirForm('stage2js')" style="cursor: pointer;">Stage 2: Sintaxe</h1> <br>
        <span id="stage2js" style="display: none; margin: 15px 0>
        <h2>Regras de sintaxe<h2> <br>
        A sintaxe são as regras que definem como os programas devem ser construídos: <br>
        <pre>
        <code>
        // Declare as variveis:
        let x = 5;
        let y = 6;

        // Calcule:
        let z = x + y;

        // Eu sou um comentario, eu não sou nada
        </code>
        </pre> <br>

        <h2>Valores JavaScript</h2><br>

        A sintaxe do JavaScript define dois tipos de valores:<br>

        Literais (Valores fixos)<br>
        Variáveis ​​(Valores das variáveis)<br>

        Literais em JavaScript<br>

        As regras de sintaxe mais importantes para literais (valores fixos) são:<br>
        Os números podem ser escritos com ou sem decimais:<br>
        Exemplo<br>
        <pre>
        <code>
        10.50
        1001
        </code>
        </pre> 

        strings são textos escritos entre aspas duplas ou simples: <br>
        Exemplo<br>
        <pre>
        <code>
        "John Doe"

        'John Doe'
        </code>
        </pre> <br>
        <h2>Palavras-chave JavaScript</h2><br>

        do JavaScript As palavras-chave são usadas para definir as ações a serem executadas.<br>

        O let e constAs palavras-chave criam variáveis:<br>
        Exemplo<br>
        <pre>
        <code>
        let x = 5;

        const fname = "John";
        </code>
        </pre>

        <h2>Variáveis ​​em JavaScript</h2><br>

        Variáveis ​​são contêineres para armazenar valores de dados .<br>

        As variáveis ​​devem ser identificadas com nomes únicos .<br>
        <pre>
        <code>
        Exemplo<br>
        <pre>
        <code>
        // Define x as a variable
        let x;

        // Assign the value 6 to x
        x = 6;
        </code>
        </pre><br>
        <h2>Operadores JavaScript</h2><br>

        em JavaScript Os operadores de atribuição (=) atribuem valores a variáveis:<br>
        Exemplo<br>
        <pre>
        <code>
        let x = 5;
        let y = 6;
        let sum = x + y;
        </code>
        </pre><br>
        JavaScript usa operadores aritméticos ( + - * / ) para calcular valores:<br>
        <pre>
        <code>
        Exemplo
        5 * 10
        </code>
        </pre>
        </span>
        `, '<a href="https://www.w3schools.com/js/js_syntax.asp"  target="_blank">documentação</a><br>', '<a href="https://pt.anotepad.com/note/read/t237ic9d"  target="_blank">Exercicio</a><br>']
}

const html = {
    stage1: [
        `
        <h1 onclick="abrirForm('stage1html')" style="cursor: pointer;">Stage 1: introdução</h1>
        <h2>O que é HTML?</h2>
        <span id="stage1html" style="display: none; margin: 15px 0>

        HTML significa Hyper Text Markup Language (Linguagem de Marcação de Hipertexto). <br>
        HTML é a linguagem de marcação padrão para a criação de páginas web. <br>
        HTML descreve a estrutura de uma página da Web.<br>
        O HTML consiste em uma série de elementos.<br>
        Os elementos HTML informam ao navegador como exibir o conteúdo.<br>
        Os elementos HTML rotulam partes do conteúdo, como "isto é um título", "isto" é um parágrafo”, "isto é um link", etc.<br>

        Um documento HTML simples<br>

        Exemplo<br>
        <pre>
        <code>
        <!DOCTYPE html>
        <html>
        <head>
        <title>Page Title</title>
        </head>
        <body>

        <h1>My First Heading</h1>
        <p>My first paragraph.</p>

        </body>
        </html> 

        O <!DOCTYPE html>declaração define que este documento é um documento HTML5
        O <html>O elemento raiz é o elemento raiz de um HTML. página
        O <head>O elemento contém metadados sobre o Página HTML
        O <title>O elemento especifica um título para o Página HTML (que é exibida na barra de título do navegador ou na aba da página)
        O <body>O elemento define o O corpo do documento é um contêiner para todo o conteúdo visível, como: Títulos, parágrafos, imagens, hiperlinks, tabelas, listas, etc.
        O <h1>O elemento define um título grande.
        O <p>O elemento define um parágrafo.
        </code>
        </pre> <br>
        <h2>O que é um elemento HTML?<h2><br>

        Um elemento HTML é definido por uma tag de abertura, algum conteúdo e uma tag de fechamento: <br>
        <pre>
        <code>
        < tagname > O conteúdo vai aqui... </tagname>
        </code>
        </pre><br>

        O elemento HTML abrange tudo desde a tag de abertura até a tag de fechamento:<br>
        <pre>
        <code>
        < h1 > Meu Primeiro título</h1> 
        <p> Meu primeiro parágrafo </p> 
        <code>
        <pre>
        </span>
        `, `<a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">Documentação</a><br>`, `<a href="https://pt.anotepad.com/note/read/qwsai3wp" target="_blank">Exercicio</a><br>`],
        stage2: [
            `
            <h1 onclick="abrirForm('stage2html')" style="cursor: pointer;">Stage 1: Basico</h1>
            <span id="stage2html" style="display: none; margin: 15px 0>
            <h2>Títulos HTML<h2><br>

            Os cabeçalhos HTML são definidos com o <pre><code><h1></pre></code> para <pre><code><h6></code></pre>etiquetas.<br>
            h1 define o título mais importante. h6 define o menos importante cabeçalho:<br>

            Exemplo<br>
            <pre>
            <code>
            <h1>Eu sou um Titulo</h1>
            <h2>Eu sou um subTitulo</h2>
            <h3>Eu sou um texto-menorzinho</h3>
            </code>
            </pre><br>

            <h2>Parágrafos HTML</h2><br>

            Os parágrafos HTML são definidos com o <p> marcação:<br>

            Exemplo<br>
            <pre>
            <code>
            <p>Eu sou um Paragrafo</p>
            <p>Eu sou outro Paragrafo</p>
            </code>
            </pre><br>
            
            <h2>Links HTML<h2><br>

            Os links HTML são definidos com o <a> marcação:<br>

            Exemplo<br>
            <pre>
            <code>
            <a href="#">isso é um link</a>
            </code>
            </pre><br>
            O destino do link é especificado no href.<br>
            Os atributos são usados para fornecer informações adicionais sobre elementos HTML.<br>
            Você aprenderá mais sobre atributos mais para frente<br>

            <h2>Imagens HTML</h2>

            As imagens HTML são definidas com o img marcação.<br>
            O arquivo de origem ( src), texto alternativo ( alt), width, e heightsão fornecidos como atributos:<br>

            Exemplo<br>
            <pre>
            <code>
            <img src="Codak.jpg" alt="Codak-logo" width="104" height="142"> 
            </code>
            </pre>
            </span>
            `, `<a href="https://www.w3schools.com/html/html_basic.asp" target="_blank">Documentação</a><br>`, `<a href="https://pt.anotepad.com/note/read/p2qqs34x" target="_blank">Exercicio</a><br>`]

}
//os stages são um obj, na chave ha um array onde [0] é o descrição onde o aluno vai ler, [1] link pra documentação, [2] o exercicio e o [3] o tempo exigido para aql stage

const professores = {
    davyson:{
        css:['<a href="https://youtu.be/aWzKb071D9o?si=Lu_aE598asHqruW0" target="_blank">Video aula</a>'],
        js:['<a href="https://youtu.be/T4P_BQdWtRg?si=PhK2eukZHBLHi0l5" target="_blank">VIdeo aula</a>'],
        html:['<a href="https://youtu.be/kOz4ynZs_KY?si=de9lPf8_2L04pUz0" target="_blank">Video aula</a>']
    },
    manel:{
        css:['<a href="https://youtu.be/dQw4w9WgXcQ?si=MuBaGnTjJl1TeZ0q" target="_blank">Video aula</a>'],
        js:['<a href="https://youtu.be/jjpYAZXRGtw?si=QDJnZoruYOXm6L4Q" target="_blank">Video aula</a>'],
        html:['<a href="https://youtu.be/nGeBJsA67sg?si=uNUIhRXgkkeraEon" target="_blank">Video aula</a>']
    }
}

function criarGuia(curso){
    //somente para não recarregar a pagina
    document.querySelector("form").addEventListener('submit', (event) =>{
        event.preventDefault()
    })
    //montar guia com base nas const a seguir
    const metodologia = document.getElementById("metedologia").value
    const professor = document.getElementById("professores").value
    let tempoDisponivelParaEstudo = document.getElementById('tempoDisponivel').value
    let tempoTest = tempoDisponivelParaEstudo.split("")
    if(tempoTest.includes("m") || tempoTest.includes("minutos") || tempoTest.includes("minuto") || tempoTest.includes("min")){
        tempoTest.length = 1  
        tempoDisponivelParaEstudo = tempoTest * 60
    } else if(tempoTest.includes("h") || tempoTest.includes("horas") || tempoTest.includes("hora") || tempoTest.includes("hrs")){
        tempoTest.length = 1
        tempoDisponivelParaEstudo = tempoTest * 3600
    } else if(tempoTest.includes("s") || tempoTest.includes("segundos") || tempoTest.includes("segundo") || tempoTest.includes("segs")){
        tempoDisponivelParaEstudo = tempoDisponivelParaEstudo
    } else{
        alert("especifique qual o tipo de tempo, horas ou minutos ou segundos")
        return
    }

    //Exibir guia
    let mapaDeCursos = { css, html, js}  // ajuda abuscar os objs com o parametro

    const divResultado = document.getElementById('div')
    const guiaMostrar = document.createElement("div")
    guiaMostrar.setAttribute("class", "guia")
    let conteudoDosStages = ""
    let professorFormatado = professores[professor]
    let cursoFormatado = mapaDeCursos[curso]
    Object.values(cursoFormatado).forEach(conteudo => {
        conteudo.forEach(item =>{
            conteudoDosStages += `${item} ${professorFormatado[curso]} `
        })
    })
    guiaMostrar.innerHTML = conteudoDosStages
    divResultado.appendChild(guiaMostrar)
    guiaMostrar.scrollIntoView({
        behavior: "smooth"
    })
    cronometro(tempoDisponivelParaEstudo)
}

let ms
let intervalo

function cronometro(tempo){
    ms = tempo
    cronometroDiplay()
}

function cronometroDiplay(){
    let segundosTotais = Math.floor(ms % 60)
    let minutosTotais = Math.floor((ms % 3600) / 60)
    let horas = Math.floor(ms / 3600)
    const hDisplay = horas < 10 ? '0' + horas : horas
    const mDisplay = minutosTotais < 10 ? '0' + minutosTotais : minutosTotais
    const sDisplay = segundosTotais < 10 ? '0' + segundosTotais : segundosTotais
    document.getElementById('divTempo').innerHTML = `${hDisplay}:${mDisplay}:${sDisplay} <br> <button onclick="iniciar()">iniciar</button> <button onclick="finalizar()">finalizar estudo</button>`
}

function iniciar() {
    if (intervalo) return 

    intervalo = setInterval(() => {
        if (ms <= 0) {
            clearInterval(intervalo)
            intervalo = null
            return;
        }
        
        ms--
        cronometroDiplay()
    }, 1000);
}

function finalizar(){
    if(intervalo !== null){
        ms = 0
        cronometroDiplay()  
        alert("estudo finalizado!")
    }
}




