/* ==========================================================================
   AULA 01 — INICIANDO COM JAVASCRIPT
   Curso: Lógica de programação: mergulhe em programação com JavaScript (Alura)
   Projeto da aula: o "Jogo do número secreto"

   COMO RODAR
   Este código usa alert() e prompt(), que são funções do NAVEGADOR.
   Por isso, ele roda dentro de uma página HTML, com a linha:
       <script src="aula.js"></script>
   No Node.js (node aula.js), essas funções NÃO existem, e o código dá o erro
   "ReferenceError: alert is not defined".
   Para ver o que o console.log() escreve: no navegador, aperte F12 → aba "Console".
   ========================================================================== */


// ---------------------------------------------------------------------------
// 1. MOSTRAR UMA MENSAGEM NA TELA: alert()
// ---------------------------------------------------------------------------
// alert() abre uma caixinha de aviso no navegador com o texto que você passar.
// Enquanto a caixinha está aberta, o código PARA e só continua quando o usuário
// clica em "OK". Por isso, dizemos que o alert() é "bloqueante".
// O texto entre aspas é uma STRING (o tipo usado para textos).
// Em JavaScript, tanto faz usar aspas duplas "..." ou simples '...':
// as duas criam uma string. O importante é abrir e fechar com o mesmo tipo.
alert("Boas vindas ao jogo do número secreto!");


// ---------------------------------------------------------------------------
// 2. GUARDAR UM VALOR: a variável com let
// ---------------------------------------------------------------------------
// let cria uma VARIÁVEL: um "espaço com nome" na memória para guardar um valor.
// Aqui, numeroSecreto guarda o NÚMERO 29 (o tipo number).
// Repare: sem aspas, 29 é um NÚMERO; com aspas, "29" seria um TEXTO.
// O nome segue o padrão camelCase: a primeira palavra em minúscula e as
// seguintes começando com maiúscula (numero + Secreto).
// O ponto e vírgula (;) marca o fim da instrução. O JavaScript até consegue
// colocá-lo sozinho em muitos casos, mas o recomendado é sempre escrever.
// Detalhe: como esse valor não muda durante o jogo, ele também poderia ser
// declarado com const (uma constante, que não pode receber outro valor).
// Mantive o let, como na aula.
let numeroSecreto = 29;


// ---------------------------------------------------------------------------
// 3. PERGUNTAR ALGO AO USUÁRIO: prompt()
// ---------------------------------------------------------------------------
// prompt() abre uma caixinha com um campo para o usuário digitar, e DEVOLVE
// (retorna) o que ele digitou. Esse valor é guardado na variável chute.
// ⚠️ MUITO IMPORTANTE: o que o usuário digita SEMPRE volta como TEXTO (string),
// mesmo que ele digite um número. Se ele digitar 29, chute vale "29" (texto).
// Se ele clicar em "Cancelar", o prompt() devolve null (que significa
// "nenhum valor").
let chute = prompt("Escolha um número entre 1 e 100");


// ---------------------------------------------------------------------------
// 4. TOMAR UMA DECISÃO: if
// ---------------------------------------------------------------------------
// O if testa uma CONDIÇÃO. Se ela for verdadeira (true), o bloco entre { } roda;
// se for falsa (false), o bloco é pulado.
//
// O operador == compara COM CONVERSÃO DE TIPO (a chamada igualdade "frouxa"):
// antes de comparar, o JavaScript converte os dois valores para o mesmo tipo.
// Por isso, "29" (texto) == 29 (número) dá true, e o jogo funciona.
//
// Existe também o === (igualdade ESTRITA), que NÃO converte nada:
// "29" === 29 dá false, porque um é texto e o outro é número.
// Na prática, o mais recomendado é usar o === e converter o texto para número
// antes de comparar, para evitar surpresas. Isso deve aparecer nas próximas aulas.
if (chute == numeroSecreto) {
    // console.log() escreve no CONSOLE do navegador (F12 → Console), e NÃO na tela.
    // Ele é usado por quem programa, para testar e "espiar" o que o código faz.
    // Por isso, o jogador comum não vê essa mensagem: ela fica só no console.
    console.log("Isso aí! Você acertou o número secreto (29)!");
}


/* ==========================================================================
   RESUMO DA AULA
   - alert(): mostra uma mensagem na tela e para o código até o usuário clicar OK.
   - prompt(): pergunta algo ao usuário; o retorno é SEMPRE uma string
     (ou null, se ele cancelar).
   - let: cria uma variável, cujo valor pode mudar. const: cria uma constante.
   - number × string: 29 é um número; "29" é um texto.
   - ==: compara convertendo os tipos; ===: compara sem converter (mais seguro).
   - console.log(): escreve no console do navegador (F12), e não na tela.
   ========================================================================== */