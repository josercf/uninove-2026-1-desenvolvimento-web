# Plano de Melhorias — Desenvolvimento Web

Este documento detalha as melhorias a serem implementadas em cada uma das 20 aulas, conforme solicitado:

1.  **Conteúdo Visual:** Diagramas, ilustrações e fluxogramas para conceitos-chave.
2.  **Mini Quiz:** Uma questão de múltipla escolha por aula para reforçar o aprendizado.
3.  **Exercício Guiado:** Exercícios práticos com `timebox` e passo a passo detalhado.
4.  **Recapitulação:** Um slide no início de cada aula (a partir da 02) resumindo a aula anterior.
5.  **Casos de Uso Reais:** Exemplos de aplicação dos conceitos em cenários do mercado.

---

## Aula 01: Apresentação e Introdução

*   **Visual:** Diagrama "Como a Web Funciona" (Cliente -> Roteador -> ISP -> Servidor -> Resposta).
*   **Quiz (Início):** Qual o principal objetivo desta disciplina? (a) Aprender a hackear, (b) Criar aplicações web completas, (c) Apenas design de sites, (d) Usar a internet. **R: (b)**
*   **Exercício Guiado:** Não se aplica (aula introdutória).
*   **Caso de Uso:** Mostrar o site da Amazon e explicar como ele é uma aplicação web complexa, não apenas uma página.

## Aula 02: Estrutura da Web e Redes

*   **Recapitulação:** Slide com os 3 pilares da web (HTML, CSS, JS) e o que é uma aplicação web.
*   **Visual:** Diagrama do modelo OSI/TCP/IP com foco nas camadas de Aplicação, Transporte, Internet e Rede.
*   **Quiz (Meio):** O que o DNS faz? (a) Entrega os pacotes de dados, (b) Traduz nomes de domínio em endereços IP, (c) Estiliza a página, (d) Garante a segurança da conexão. **R: (b)**
*   **Exercício Guiado (15 min):** "Explorando a Rede": 1. Abra o terminal. 2. Use `ping www.google.com` para ver o IP. 3. Use `tracert www.google.com` (ou `traceroute` no Linux/Mac) para ver a rota dos pacotes.
*   **Caso de Uso:** Explicar como o WhatsApp Web usa o protocolo HTTP(S) para enviar e receber mensagens através do navegador.

## Aula 03: Introdução ao HTML

*   **Recapitulação:** Diferença entre IP, DNS e HTTP.
*   **Visual:** Imagem de uma "árvore DOM" mostrando a hierarquia de tags (html -> head, body -> h1, p, div).
*   **Quiz (Final):** Qual tag é usada para o título principal de uma página? (a) `<p>`, (b) `<div>`, (c) `<h1>`, (d) `<title>`. **R: (c)**
*   **Exercício Guiado (20 min):** "Criando sua Primeira Página": 1. Crie `index.html`. 2. Adicione a estrutura básica (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`). 3. Insira um `<h1>` com seu nome e um `<p>` com uma breve descrição.
*   **Caso de Uso:** Analisar a estrutura HTML de uma notícia do G1, identificando `<h1>` para o título, `<p>` para os parágrafos e `<img>` para as imagens.

## Aula 04: Introdução ao CSS

*   **Recapitulação:** O que é a árvore DOM e as tags semânticas (`<header>`, `<footer>`, `<main>`).
*   **Visual:** Diagrama do "Box Model" (Conteúdo -> Padding -> Border -> Margin).
*   **Quiz (Meio):** Como se seleciona um elemento com o id `titulo`? (a) `.titulo`, (b) `#titulo`, (c) `titulo`, (d) `*titulo`. **R: (b)**
*   **Exercício Guiado (25 min):** "Estilizando sua Página": 1. Crie `style.css`. 2. Link o CSS no seu HTML. 3. Mude a cor de fundo do `<body>`. 4. Centralize o `<h1>` e mude sua cor. 5. Adicione uma borda ao parágrafo.
*   **Caso de Uso:** Mostrar como o Twitter usa CSS para ter um layout consistente em diferentes dispositivos (desktop e mobile).

## Aula 05: CSS Avançado e Formulários

*   **Recapitulação:** Diferença entre seletores de classe, id e tag; o que é o Box Model.
*   **Visual:** GIF mostrando a diferença entre `display: flex` e `display: grid` para organizar elementos.
*   **Quiz (Final):** Qual tag de input é usada para senhas? (a) `<input type="text">`, (b) `<input type="password">`, (c) `<input type="hidden">`, (d) `<input type="secure">`. **R: (b)**
*   **Exercício Guiado (30 min):** "Criando um Formulário de Contato": 1. Crie um `<form>`. 2. Adicione campos para Nome (`text`), Email (`email`) e Mensagem (`textarea`). 3. Adicione um botão de Enviar (`submit`). 4. Use Flexbox para alinhar os campos.
*   **Caso de Uso:** Tela de login do Instagram como um exemplo de formulário simples e eficaz.

... (o plano continuará para as 20 aulas)
