# Estudos de JavaScript

<p align="center">
  <picture>
    <source media="(max-width: 767px)" srcset="https://raw.githubusercontent.com/IsaacGomes260653/estudos-javascript/main/.github/banner-mobile.svg">
    <img src="https://raw.githubusercontent.com/IsaacGomes260653/estudos-javascript/main/.github/banner.svg" alt="Estudos de JavaScript, estudos rumo ao Flutter: lógica de programação com JavaScript no curso da Alura, como base para o Dart e o Flutter">
  </picture>
</p>

Meus estudos de lógica de programação com JavaScript, no curso da Alura. É a preparação para voltar ao Dart e seguir para o Flutter.

## Por que lógica antes do Dart

- **A lógica é a mesma em qualquer linguagem.** Variáveis, condições, laços e funções funcionam do mesmo jeito em JavaScript, Dart ou Java. Muda a escrita, não o raciocínio.
- **Base firme primeiro, Dart e Flutter depois.** Com a lógica no automático, sobra cabeça para o que é próprio do Dart (tipos, null safety, classes) e do Flutter (widgets e telas).
- **O JavaScript é uma porta de entrada leve.** Roda direto no navegador, sem instalar nada e sem compilar: escrevo, salvo e vejo o resultado na hora.

## O caminho

**Lógica com JavaScript** (agora, aqui) → **Dart** ([estudos-dart](https://github.com/IsaacGomes260653/estudos-dart)) → **Flutter**

A trilha completa, etapa por etapa, fica no [roadmap de estudos do meu perfil](https://github.com/IsaacGomes260653#roadmap).

## O curso

[Lógica de programação: mergulhe em programação com JavaScript](https://cursos.alura.com.br/course/logica-programacao-mergulhe-programacao-javascript), na [Alura](https://www.alura.com.br).

- [x] Aula 01: Iniciando com JavaScript
- [ ] Aula 02: Condicionais e concatenação
- [ ] Aula 03: Loops e tentativas
- [ ] Aula 04: Boas práticas de programação
- [ ] Aula 05: Desafio

## Anotações da Aula 01

Projeto da aula: o **Jogo do número secreto**. O código e as explicações completas estão nos comentários de [`aula.js`](01-logica-de-programacao/aula-01-iniciando-com-javascript/aula.js) (o jogo) e de [`desafio.js`](01-logica-de-programacao/aula-01-iniciando-com-javascript/desafio.js) (os desafios).

- **`alert()`** abre uma caixinha de aviso no navegador. O código para até a pessoa clicar em OK: o `alert()` é bloqueante.
- **`prompt()`** abre uma caixinha com um campo para digitar e devolve o que foi digitado, **sempre como string**, mesmo que seja um número. Se a pessoa clicar em Cancelar, devolve `null`.
- **`let`** cria uma variável: um espaço com nome na memória, cujo valor pode mudar. O `const` cria uma constante. Com `let`, não dá para declarar o mesmo nome duas vezes no mesmo escopo (`SyntaxError: Identifier 'nome' has already been declared`).
- **`number` × `string`:** `29` é um número; `"29"` é um texto. Aspas simples e duplas criam strings do mesmo jeito. Nome de variável vai sem aspas; texto vai com aspas.
- **O tipo pertence ao valor**, e não à variável: a mesma variável pode receber depois um valor de outro tipo (tipagem dinâmica).
- **`==` × `===`:** o `==` converte os tipos antes de comparar (`"29" == 29` dá `true`); o `===` não converte (`"29" === 29` dá `false`) e é o mais seguro.
- **`if`** testa uma condição: se ela for `true`, o bloco entre `{ }` roda; se for `false`, é pulado. Comparando um texto com um número (`"20" >= 18`), o JavaScript converte o texto para número; um texto que não é número vira `NaN`, e qualquer comparação com `NaN` dá `false`.
- **`console.log()`** escreve no console do navegador (<kbd>F12</kbd> → **Console**), e não na tela. Serve para quem programa testar e espiar o que o código faz.
- **Guardar um texto numa variável** permite reutilizá-lo: se a mensagem mudar, muda num lugar só.
- **Onde roda:** `alert()` e `prompt()` são funções do navegador. No Node.js (`node aula.js`), o código dá `ReferenceError: alert is not defined`; ele roda numa página HTML, com `<script src="aula.js"></script>`.

## Glossário

Os termos técnicos de cada aula, explicados em uma linha. A cada aula nova, entra uma tabela nova, com os termos em ordem alfabética.

### Aula 01

| Termo | O que é |
| --- | --- |
| Bloqueante | Função que para o código até a pessoa responder, como o `alert()` e o `prompt()`. |
| camelCase | Padrão de nome com a primeira palavra em minúscula e as seguintes começando com maiúscula: `numeroSecreto`. |
| Coerção de tipos | Conversão de tipo que o JavaScript faz sozinho antes de comparar, como no `==` e no `>=`. |
| Console | Área do navegador (<kbd>F12</kbd> → **Console**) onde aparece o que o `console.log()` escreve. |
| `const` | Cria uma constante: um valor que não pode ser trocado depois. |
| Declarar e inicializar | Criar a variável e já guardar um valor nela, como em `let idade = 25;`. |
| Escopo | O trecho do código em que um nome vale; com `let`, não dá para repetir o mesmo nome no mesmo escopo. |
| Igualdade estrita (`===`) | Compara valor e tipo, sem converter nada: `"29" === 29` dá `false`. |
| Igualdade frouxa (`==`) | Converte os tipos antes de comparar: `"29" == 29` dá `true`. |
| `let` | Cria uma variável, cujo valor pode mudar. |
| `NaN` | "Not a Number": o resultado de converter para número um texto que não é número; qualquer comparação com ele dá `false`. |
| `null` | "Nenhum valor": o que o `prompt()` devolve quando a pessoa clica em Cancelar. |
| `number` | O tipo dos números, escritos sem aspas: `29`. |
| Ponto e vírgula (`;`) | Marca o fim de uma instrução. |
| `ReferenceError` | Erro de quando o código usa um nome que não existe ali, como o `alert` no Node.js. |
| Retorno | O valor que uma função devolve, como o texto digitado no `prompt()`. |
| `string` | O tipo dos textos, escritos entre aspas simples ou duplas: `"29"`. |
| `SyntaxError` | Erro na escrita do código, como declarar com `let` um nome que já existe no mesmo escopo. |
| Tipagem dinâmica | O tipo pertence ao valor, e não à variável: a mesma variável pode receber valores de tipos diferentes. |
| `true` e `false` | Os dois resultados possíveis de uma condição, como a do `if`. |
| Variável | Um espaço com nome na memória para guardar um valor. |

<!-- Aula nova: copie o bloco abaixo, troque o número e preencha.
### Aula 02

| Termo | O que é |
| --- | --- |
| Termo | Explicação em uma linha. |
-->

## Como eu estudo

1. Assisto à aula.
2. Escrevo o código sozinho, sem copiar.
3. Provoco erros de propósito, para entender o que cada mensagem de erro quer dizer.
4. Explico com as minhas palavras, nos comentários do código.
5. Revejo depois, com a cabeça fria.
6. Faço um commit por aula concluída.

## Organização

Uma pasta por curso e, dentro dela, uma pasta por aula:

```text
estudos-javascript/
├── 01-logica-de-programacao/
│   ├── aula-01-iniciando-com-javascript/
│   ├── aula-02-condicionais-e-concatenacao/
│   ├── aula-03-loops-e-tentativas/
│   ├── aula-04-boas-praticas/
│   └── aula-05-desafio/
├── LICENSE
└── README.md
```

As pastas das aulas ficam vazias até eu chegar nelas: o código entra conforme eu estudo.

## Como rodar

**No navegador:** abra o `index.html` da aula (dois cliques no arquivo já resolvem). Os resultados de `console.log` aparecem no console do navegador: <kbd>F12</kbd> → aba **Console**.

**Arquivos `.js` soltos, no terminal**, com o [Node.js](https://nodejs.org) instalado (o `node -v` mostra a versão):

```sh
node arquivo.js
```

## Java × JavaScript

Apesar do nome, são linguagens diferentes:

| | Java | JavaScript |
|---|---|---|
| Roda | na JVM | no navegador e no Node.js |
| Tipagem | estática | dinâmica |
| Tipo conferido | antes de rodar | enquanto roda |
| Uso típico | back-end e Android | sites e Node.js |

A lógica é a mesma nas duas: um `if`, um `for` ou uma função resolvem o mesmo problema, só com outra escrita.

## Certificado

Ainda em andamento. O link do certificado da Alura entra aqui quando eu terminar o curso.

## English summary

My programming logic studies with JavaScript, following the Alura course [Lógica de programação: mergulhe em programação com JavaScript](https://cursos.alura.com.br/course/logica-programacao-mergulhe-programacao-javascript). Logic (variables, conditions, loops and functions) is the same in any language, so I'm building that foundation first, in a light language that runs straight in the browser, before going back to [Dart](https://github.com/IsaacGomes260653/estudos-dart) and moving on to Flutter. There is one folder per course and one folder per lesson; open a lesson's `index.html` in the browser, or run a standalone file with `node file.js`. Comments are in Portuguese.

## Licença · License

[MIT](LICENSE)
