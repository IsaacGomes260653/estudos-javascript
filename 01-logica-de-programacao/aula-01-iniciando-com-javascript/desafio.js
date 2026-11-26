/* ==========================================================================
   AULA 01 — DESAFIOS
   Curso: Lógica de programação: mergulhe em programação com JavaScript (Alura)

   COMO RODAR
   Assim como a aula, este arquivo usa alert() e prompt(), funções do NAVEGADOR.
   Ele roda numa página HTML, com a linha:
       <script src="desafio.js"></script>
   Os casos abaixo rodam um depois do outro, na ordem em que aparecem.
   ========================================================================== */


// ---------------------------------------------------------------------------
// CASO 1. UMA MENSAGEM DE BOAS-VINDAS
// ---------------------------------------------------------------------------
// alert() mostra a mensagem numa caixinha e espera o usuário clicar em "OK".
// Aqui foram usadas aspas simples '...': em JavaScript, elas funcionam
// exatamente como as aspas duplas "...".
alert('Boas vindas ao nosso site!');


// ---------------------------------------------------------------------------
// CASO 2. DECLARAR VARIÁVEIS DE TIPOS DIFERENTES
// ---------------------------------------------------------------------------
// Cada let cria uma variável e já guarda um valor nela (isso se chama
// "declarar e inicializar"). O JavaScript descobre o TIPO pelo valor:
// - nome guarda um TEXTO (string), por isso o valor está entre aspas;
// - idade, numeroDeVendas e saldoDisponivel guardam NÚMEROS (number),
//   por isso estão sem aspas.
// Em JavaScript, o tipo pertence ao VALOR, e não à variável: a mesma variável
// poderia receber, depois, um valor de outro tipo. Isso se chama
// TIPAGEM DINÂMICA.
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;


// ---------------------------------------------------------------------------
// CASO 3. UMA MENSAGEM DE ERRO: o texto direto × o texto numa variável
// ---------------------------------------------------------------------------
// Jeito 1: o texto é escrito direto dentro do alert().
alert('Erro! Preencha todos os campos');

// Jeito 2: o texto é guardado numa variável e, depois, a variável é usada.
// A vantagem: se a mesma mensagem aparecer em vários lugares, basta mudá-la
// num lugar só (na variável), e todos os usos mudam juntos.
// Obs.: no código original, o texto estava entre parênteses: ('...').
// Os parênteses não estavam errados, mas não faziam nada aqui, então saíram.
let mensagemDeErro = 'Erro! Preencha todos os campos';

// Repare: mensagemDeErro está SEM aspas, porque é o NOME de uma variável.
// Com aspas, o alert mostraria a palavra "mensagemDeErro", e não o texto
// guardado nela.
alert(mensagemDeErro);


// ---------------------------------------------------------------------------
// CASO 4. PERGUNTAR A IDADE E DECIDIR COM if
// ---------------------------------------------------------------------------
// Por que nome2 e idade2? Porque nome e idade já foram criadas com let no
// CASO 2. Com let, NÃO dá para declarar duas variáveis com o mesmo nome no
// mesmo lugar do código (no mesmo escopo). Se tentássemos, o JavaScript daria
// o erro: "SyntaxError: Identifier 'nome' has already been declared".
let nome2 = prompt('Qual é seu nome?');

// Lembrete: o prompt() SEMPRE devolve um TEXTO (string).
// Se o usuário digitar 20, idade2 vale "20" (texto), e não 20 (número).
let idade2 = prompt('Qual é sua idade?');

// O operador >= significa "maior ou igual a".
// Comparando um TEXTO com um NÚMERO ("20" >= 18), o JavaScript converte o
// texto para número antes de comparar. Por isso, a condição funciona.
// Mas, se o usuário digitar letras (por exemplo, "vinte"), a conversão dá NaN
// ("Not a Number", que significa "não é um número"), e qualquer comparação
// com NaN dá false: o alert não aparece.
if (idade2 >= 18) {
    alert('Pode tirar a habilitação!');
}


/* ==========================================================================
   RESUMO DOS DESAFIOS
   - Aspas simples '...' e duplas "..." criam strings do mesmo jeito.
   - O tipo pertence ao valor (tipagem dinâmica): "Lua" é string; 25 é number.
   - Guardar um texto numa variável permite reutilizá-lo em vários lugares.
   - Nome de variável vai SEM aspas; texto vai COM aspas.
   - let não permite declarar duas vezes o mesmo nome no mesmo escopo.
   - prompt() devolve string; nas comparações com >= e <=, o JavaScript converte
     o texto para número (e um texto que não é número vira NaN).
   ========================================================================== */