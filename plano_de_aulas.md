# Plano de Aulas: Desenvolvimento Web com ASP.NET Core MVC

**Disciplina:** Desenvolvimento Web
**Carga Horária Total:** 40 horas (20 aulas de 120 minutos)
**Metodologia:** Sala de Aula Invertida
**Tecnologias:** HTML, CSS, JavaScript, C#, ASP.NET Core MVC, Entity Framework Core, MySQL

---

### Módulo 1: Fundamentos da Web e Front-End (Aulas 1-6)

**Aula 01: Apresentação e Introdução ao Desenvolvimento Web**
- **Objetivos:** Apresentar a disciplina, o professor e a metodologia. Introduzir os conceitos fundamentais da Web e a arquitetura cliente-servidor.
- **Atividade Pré-Aula:** Leitura de artigo sobre a história da Web e o funcionamento básico de um navegador.
- **Em Sala:** Apresentação, alinhamento de expectativas, discussão sobre a atividade pré-aula, e uma visão geral do projeto que será desenvolvido ao longo do semestre.

**Aula 02: A Estrutura da Web e Redes**
- **Objetivos:** Compreender o funcionamento das redes TCP/IP, o modelo OSI, DNS e o protocolo HTTP/HTTPS.
- **Atividade Pré-Aula:** Vídeo explicativo sobre o modelo OSI e o protocolo TCP/IP.
- **Em Sala:** Exercícios práticos de análise de requisições HTTP no navegador (DevTools) e discussões sobre a importância da segurança (HTTPS).

**Aula 03: Introdução ao HTML**
- **Objetivos:** Aprender a estrutura básica de um documento HTML e as principais tags semânticas.
- **Atividade Pré-Aula:** Tutorial interativo sobre os elementos básicos do HTML.
- **Em Sala:** Criação da primeira página web, focando na estrutura semântica (header, main, footer, etc.) e na correta utilização das tags.

**Aula 04: Introdução ao CSS**
- **Objetivos:** Aprender a estilizar páginas HTML utilizando CSS (inline, interno e externo) e seletores.
- **Atividade Pré-Aula:** Leitura sobre a sintaxe do CSS e os diferentes tipos de seletores.
- **Em Sala:** Exercícios práticos de estilização da página criada na aula anterior, explorando cores, fontes e o box model.

**Aula 05: CSS Avançado e Formulários HTML**
- **Objetivos:** Aprofundar em CSS com unidades de medida (px, em, rem) e introduzir a criação de formulários com HTML.
- **Atividade Pré-Aula:** Vídeo sobre a diferença entre medidas absolutas e relativas no CSS.
- **Em Sala:** Criação de um formulário de contato complexo e estilização utilizando diferentes unidades de medida.

**Aula 06: Introdução ao JavaScript**
- **Objetivos:** Introduzir a linguagem JavaScript e sua manipulação do DOM para criar páginas dinâmicas.
- **Atividade Pré-Aula:** Tutorial básico de JavaScript (variáveis, tipos de dados, operadores).
- **Em Sala:** Exercícios de manipulação do DOM para validar o formulário de contato criado na aula anterior e adicionar interatividade.

---

### Módulo 2: Backend com C# e ASP.NET Core MVC (Aulas 7-12)

**Aula 07: Ambiente de Desenvolvimento .NET**
- **Objetivos:** Configurar o ambiente de desenvolvimento .NET (SDK, VS Code, extensões C#) e introduzir a linguagem C#.
- **Atividade Pré-Aula:** Instalação do .NET SDK e do VS Code.
- **Em Sala:** "Hello World" em C#, exploração dos tipos de dados, variáveis e estruturas básicas da linguagem.

**Aula 08: Primeiros Passos com ASP.NET Core MVC**
- **Objetivos:** Criar o primeiro projeto ASP.NET Core MVC, entender a estrutura de pastas (Models, Views, Controllers) e o fluxo de uma requisição.
- **Atividade Pré-Aula:** Leitura sobre o padrão de arquitetura MVC.
- **Em Sala:** Criação de um projeto MVC, criação do primeiro Controller e da primeira View, e passagem de dados simples para a View.

**Aula 09: Estruturas de Controle em C# com MVC**
- **Objetivos:** Utilizar estruturas de desvio condicional e de repetição em C# dentro das Views (Razor).
- **Atividade Pré-Aula:** Revisão de `if/else`, `switch`, `for`, `while` em C#.
- **Em Sala:** Criação de uma View que exibe uma lista de produtos, utilizando laços de repetição e condicionais para formatar a exibição.

**Aula 10: Recebendo Dados com Formulários MVC**
- **Objetivos:** Aprender a receber e processar dados de formulários HTML em um Controller.
- **Atividade Pré-Aula:** Leitura sobre `[HttpGet]` e `[HttpPost]` em ASP.NET Core MVC.
- **Em Sala:** Adaptação do formulário de contato para enviar os dados para um método de um Controller e exibir os dados recebidos.

**Aula 11: Models e Validação de Dados**
- **Objetivos:** Criar Models para representar os dados da aplicação e utilizar Data Annotations para validação.
- **Atividade Pré-Aula:** Estudo sobre o conceito de Models no MVC e as principais Data Annotations.
- **Em Sala:** Criação de um Model para o formulário de contato, implementação de validações (required, email, etc.) e exibição de mensagens de erro na View.

**Aula 12: Introdução ao Entity Framework Core com MySQL**
- **Objetivos:** Introduzir o ORM Entity Framework Core e configurá-lo para se conectar a um banco de dados MySQL.
- **Atividade Pré-Aula:** Leitura sobre o que é um ORM e os benefícios do Entity Framework Core.
- **Em Sala:** Instalação dos pacotes do EF Core e do driver MySQL, configuração da string de conexão e criação do DbContext.

---

### Módulo 3: Acesso a Dados e Funcionalidades Avançadas (Aulas 13-17)

**Aula 13: Operações CRUD com Entity Framework Core**
- **Objetivos:** Implementar as operações de Criar, Ler, Atualizar e Deletar (CRUD) no banco de dados utilizando EF Core.
- **Atividade Pré-Aula:** Vídeo sobre as operações básicas do EF Core (Add, Find, Update, Remove).
- **Em Sala:** Implementação completa do CRUD para uma entidade (ex: Produtos), com Views para cada operação.

**Aula 14: Gerenciamento de Estado com Cookies e Sessões**
- **Objetivos:** Aprender a manter o estado entre requisições utilizando Cookies e Sessões.
- **Atividade Pré-Aula:** Leitura sobre a diferença entre Cookies e Sessões e quando usar cada um.
- **Em Sala:** Criação de um carrinho de compras simples, armazenando os itens na sessão do usuário.

**Aula 15: Requisições Assíncronas (AJAX) com MVC**
- **Objetivos:** Integrar requisições assíncronas (AJAX) com o backend MVC para criar interfaces mais ricas e dinâmicas.
- **Atividade Pré-Aula:** Revisão de JavaScript `fetch` API.
- **Em Sala:** Implementação de uma funcionalidade de busca de produtos em tempo real, sem recarregar a página, utilizando AJAX para chamar um método no Controller.

**Aula 16: Autenticação e Autorização**
- **Objetivos:** Implementar um sistema de autenticação de usuários (login/logout) e controlar o acesso a áreas restritas da aplicação.
- **Atividade Pré-Aula:** Estudo sobre os conceitos de autenticação e autorização.
- **Em Sala:** Utilização do ASP.NET Core Identity para adicionar um sistema de login completo, com registro de usuários e proteção de Controllers/Actions.

**Aula 17: Introdução a API REST com ASP.NET Core**
- **Objetivos:** Aprender a construir uma API REST para expor os dados da aplicação para outros clientes (como aplicativos mobile ou SPAs).
- **Atividade Pré-Aula:** Leitura sobre os princípios do REST e os verbos HTTP.
- **Em Sala:** Criação de um Controller de API para expor os dados dos produtos em formato JSON.

---

### Módulo 4: Tópicos Avançados e Projeto Final (Aulas 18-20)

**Aula 18: Tópicos Avançados de MVC**
- **Objetivos:** Explorar tópicos avançados como View Components, Tag Helpers e Middlewares.
- **Atividade Pré-Aula:** Pesquisa sobre exemplos de uso de View Components e Tag Helpers.
- **Em Sala:** Refatoração do projeto para utilizar View Components em partes reutilizáveis da interface e criação de Tag Helpers customizadas.

**Aula 19: Deploy da Aplicação**
- **Objetivos:** Aprender a publicar a aplicação em um servidor de hospedagem. Discussão sobre o formato WAR e alternativas no mundo .NET.
- **Atividade Pré-Aula:** Leitura sobre diferentes opções de deploy para aplicações ASP.NET Core (Azure, IIS, Docker).
- **Em Sala:** Simulação de um processo de deploy, gerando os arquivos de publicação e discutindo as configurações necessárias para cada ambiente.

**Aula 20: Revisão Geral e Apresentação do Projeto Final**
- **Objetivos:** Revisar os principais conceitos aprendidos e orientar sobre o desenvolvimento do projeto final da disciplina.
- **Atividade Pré-Aula:** Os alunos devem trazer dúvidas e pontos que gostariam de revisar.
- **Em Sala:** Sessão de tira-dúvidas, revisão dos tópicos mais importantes e apresentação da proposta do projeto final, que consolidará todo o conhecimento adquirido.
