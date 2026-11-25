# Estudos de Java

<p align="center">
  <picture>
    <source media="(max-width: 767px)" srcset="https://raw.githubusercontent.com/IsaacGomes260653/estudos-java/main/.github/banner-mobile.svg">
    <img src="https://raw.githubusercontent.com/IsaacGomes260653/estudos-java/main/.github/banner.svg" alt="Estudos de Java, estudos rumo ao Flutter: lógica de programação com Java, um arquivo por assunto, com casos curtos e código comentado em português">
  </picture>
</p>

Meus estudos de lógica de programação com Java, rumo ao Flutter. Antes de voltar ao Dart e seguir para o Flutter, firmo aqui a base: variáveis, operadores, condições, repetições e o resto da lógica que vale para qualquer linguagem. Cada assunto fica registrado em código comentado em português, para eu voltar e revisar quando precisar e para quem quiser aprender do zero seguindo o mesmo caminho.

## Organização

A organização segue o padrão do [estudos-dart](https://github.com/IsaacGomes260653/estudos-dart):

- uma pasta por etapa;
- um arquivo por assunto;
- um `main` por caso: cada caso é um programa completo, pequeno e com uma ideia só.

As pastas e os arquivos ainda não existem: a estrutura vai ser montada conforme eu estudar.

## Como rodar um arquivo Java

Precisa de um JDK instalado (o `java -version` no terminal mostra a versão).

**Direto, num comando só** (Java 11 ou mais novo):

```sh
java Arquivo.java
```

O Java compila o arquivo na memória e já roda, sem gerar nenhum `.class`. É o jeito mais rápido para testar um caso.

**Em dois passos, compilando antes:**

```sh
javac Arquivo.java
java Arquivo
```

O `javac` compila o código e gera o `Arquivo.class` (o bytecode). O `java` roda esse bytecode na JVM: por isso, no segundo comando, vai só o nome da classe, sem o `.java` nem o `.class`.
