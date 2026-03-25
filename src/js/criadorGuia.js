//variveis onde ficam stages
const stageCss = {
    "stage 1: Introdução": [
    `CSS é a linguagem que usamos para estilizar uma página da Web.
    CSS significa Cascading Style Sheets (Folhas de Estilo em Cascata).
    O CSS descreve como os elementos HTML devem ser exibidos na tela. papel, ou em outros meios
    O CSS economiza muito trabalho. Ele pode controlar o layout de várias páginas da web simultaneamente
    Folhas de estilo externas são armazenadas em arquivos CSS.

    Por que usar CSS?
    O CSS é usado para definir estilos para suas páginas da web, 
    incluindo o design e o layout. e variações na exibição para diferentes dispositivos e tamanhos de tela.

    Exemplo de CSS
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
`, "link da documentação: https://www.w3schools.com/css/css_intro.asp", "sem exercio disponivel"],
    "stage 2: Seletores": [
        `
        Os seletores CSS são usados ​​para "encontrar" (ou selecionar) os elementos HTML que você deseja selecionar. quero estilizar.
        Podemos dividir os seletores CSS em cinco categorias:

        Seletores simples (selecionam elementos com base em nome, ID e classe)
        Seletores combinatórios (selecionar) elementos baseados em uma relação específica entre eles)
        Seletores de pseudo-classe (selecionam elementos com base em um determinado estado)
        Seletores de pseudo-elementos (selecionar) e estilizar uma parte de um elemento)
        Seletores de atributos (selecione elementos com base em um atributo ou valor de atributo)

        Exemplo

        Aqui, todos os elementos <p> da página serão Alinhado ao centro, com texto na cor vermelha:
        p {
        text-align: center;
        color: red;
        } 
        O seletor de ID CSS

        O idO seletor utiliza o atributo id de um elemento HTML para selecionar um elemento específico.
        O ID de um elemento é único dentro de uma página, portanto o seletor de ID é costumava ser Selecione um elemento único!
        Para selecionar um elemento com um ID específico, escreva o caractere hash (#), seguido de o ID do elemento. 

        Exemplo

        #para1 {
        text-align: center;
        color: red;
        }

        O seletor de classe CSS

        O classO seletor seleciona elementos HTML com um atributo de classe específico.
        Para selecionar elementos com uma classe específica, escreva um ponto (.) seguido do caractere. nome da classe. 

        Exemplo

        .center {
        text-align: center;
        color: red;
        }    
        `, "Link para documentação: https://www.w3schools.com/css/css_selectors.asp", "Exercicio disponivel: https://pt.anotepad.com/note/read/qiqkh8h5"],
}

const stageJs = {
    "stage 1: introdução": [
        `
        O que o JavaScript pode fazer?

        JavaScript é a linguagem de programação da web.
        Ele pode calcular, manipular e validar dados.
        Ele pode atualizar e alterar tanto HTML quanto CSS. 

        Um dos muitos métodos HTML em JavaScript é getElementById().

        O exemplo abaixo "encontra" um elemento HTML (com id="demo"), e altera o conteúdo do elemento (innerHTML) para "Olá JavaScript": 
        document.getElementById("demo").innerHTML = "Hello JavaScript";
        
        JavaScript pode alterar estilos HTML (CSS)

        Alterar o estilo de um elemento HTML é uma variante de alterar o próprio HTML. atributo: 
        document.getElementById("demo").style.fontSize = "35px"; 
        `, "Link para documentação: https://www.w3schools.com/js/js_intro.asp", "Sem exercicio Disponivel"],
    "Stage 2: Sintaxe":[
        `
        Regras de sintaxe
        A sintaxe são as regras que definem como os programas devem ser construídos:
        // Declare as variveis:
        let x = 5;
        let y = 6;

        // Calcule:
        let z = x + y;

        // Eu sou um comentario, eu não sou nada 

        Valores JavaScript

        A sintaxe do JavaScript define dois tipos de valores:

        Literais (Valores fixos)
        Variáveis ​​(Valores das variáveis)

        Literais em JavaScript

        As regras de sintaxe mais importantes para literais (valores fixos) são:
        Os números podem ser escritos com ou sem decimais:
        Exemplo
        10.50
        1001 

        strings são textos escritos entre aspas duplas ou simples:
        Exemplo
        "John Doe"

        'John Doe'

        Palavras-chave JavaScript

        do JavaScript As palavras-chave são usadas para definir as ações a serem executadas.

        O let e constAs palavras-chave criam variáveis:
        Exemplo
        let x = 5;

        const fname = "John";

        ariáveis ​​em JavaScript

        Variáveis ​​são contêineres para armazenar valores de dados .

        As variáveis ​​devem ser identificadas com nomes únicos .
        Exemplo
        // Define x as a variable
        let x;

        // Assign the value 6 to x
        x = 6;

        Operadores JavaScript

        em JavaScript Os operadores de atribuição (=) atribuem valores a variáveis:
        Exemplo
        let x = 5;
        let y = 6;
        let sum = x + y;

        JavaScript usa operadores aritméticos ( + - * / ) para calcular valores:
        Exemplo
        5 * 10
        `, "link para documentação: https://www.w3schools.com/js/js_syntax.asp", " exercicio disponivel: https://pt.anotepad.com/note/read/t237ic9d"]
}

const stageHtml = {
    "stage 1: Introdução": [
        `
        O que é HTML?

        HTML significa Hyper Text Markup Language (Linguagem de Marcação de Hipertexto).
        HTML é a linguagem de marcação padrão para a criação de páginas web.
        HTML descreve a estrutura de uma página da Web.
        O HTML consiste em uma série de elementos.
        Os elementos HTML informam ao navegador como exibir o conteúdo.
        Os elementos HTML rotulam partes do conteúdo, como "isto é um título", "isto" é um parágrafo”, "isto é um link", etc.

        Um documento HTML simples

        Exemplo
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

        O que é um elemento HTML?

        Um elemento HTML é definido por uma tag de abertura, algum conteúdo e uma tag de fechamento:
        < tagname > O conteúdo vai aqui... </tagname>

        O elemento HTML abrange tudo desde a tag de abertura até a tag de fechamento:
        < h1 > Meu Primeiro título</h1> 
        <p> Meu primeiro parágrafo </p> 
        `, "Link para documentação: https://www.w3schools.com/html/html_intro.asp", "Exercicio disponivel: https://pt.anotepad.com/note/read/qwsai3wp"],
        "stage 2: Basico": [
            `
            Títulos HTML

            Os cabeçalhos HTML são definidos com o <h1> para <h6>etiquetas.
            <h1>define o título mais importante. <h6>define o menos importante cabeçalho:

            Exemplo
            <h1>Eu sou um Titulo</h1>
            <h2>Eu sou um subTitulo</h2>
            <h3>Eu sou um texto-menorzinho</h3> 

            Parágrafos HTML

            Os parágrafos HTML são definidos com o <p> marcação:

            Exemplo
            <p>Eu sou um Paragrafo</p>
            <p>Eu sou outro Paragrafo</p>
            
            Links HTML

            Os links HTML são definidos com o <a> marcação:

            Exemplo
            <a href="#">isso é um link</a>
            O destino do link é especificado no href.
            Os atributos são usados para fornecer informações adicionais sobre elementos HTML.
            Você aprenderá mais sobre atributos mais para frente

            Imagens HTML

            As imagens HTML são definidas com o <img> marcação.
            O arquivo de origem ( src), texto alternativo ( alt), width, e heightsão fornecidos como atributos:

            Exemplo
            <img src="Codak.jpg" alt="Codak-logo" width="104" height="142"> 
            `, "link para documentação: https://www.w3schools.com/html/html_basic.asp", "Exercicio disponivel: https://pt.anotepad.com/note/read/p2qqs34x"]
}

