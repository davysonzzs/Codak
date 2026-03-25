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