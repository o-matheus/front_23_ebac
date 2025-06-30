# 🧪 Exercício Prático – Módulo *Ajax e exceções*

📁 **Branch:** `exercicio_ajax`

## 🧭 Descrição Geral

Neste exercício, o desafio foi adaptar um projeto base disponibilizado na plataforma EBAC para consumir dados da **API do GitHub**, preenchendo dinamicamente uma interface com essas informações. O foco foi praticar o uso da **Fetch API** ou do **XMLHttpRequest**, juntamente com o **tratamento de exceções** por meio de estruturas como `try...catch`.

Além disso, foi solicitado:

* Criar uma **branch específica** chamada `exercicio_ajax`;
* Armazenar todo o código modificado nessa branch no GitHub;
* Enviar o link do repositório à plataforma.

---

## ⚙️ Primeiros Passos

* A primeira ação foi **criar a branch** com o comando:

  ```bash
  git checkout -b exercicio_ajax
  ```

* Em seguida, todos os arquivos antigos foram **removidos da branch**, mantendo apenas o link do jQuery (por precaução).

* A partir disso, o projeto foi reestruturado do zero, com o HTML inicial e um script externo (`main.js`) conectado.

---

## 🧩 Lógica de Funcionamento

O processo de busca e preenchimento de dados ocorre da seguinte forma:

1. Assim que o documento HTML é carregado, a função `$(document).ready()` do jQuery é acionada.
2. Dentro dessa função, foi criada uma constante `endpoint` com a URL da API do GitHub.
3. Utilizando `fetch(endpoint).then().then()`, foi realizada a requisição e tratada a resposta JSON para extrair os dados desejados.

---

## 📌 Informações Coletadas da API do GitHub

As seguintes informações foram extraídas do JSON da API:

* Foto de perfil (`avatar_url`)
* Nome completo (`name`)
* Nome de usuário (`login`)
* Quantidade de repositórios públicos (`public_repos`)
* Número de seguidores (`followers`)
* Número de usuários seguidos (`following`)
* Link direto para o perfil no GitHub (`html_url`)

---

## 🧠 Aprendizados Durante o Processo

### 🏷️ Seletores e Manipulação com jQuery

* Para **alterar atributos** como `src` (de `<img>`) e `href` (de `<a>`), foi utilizado:

  ```javascript
  $('#minha-imagem').attr('src', valorDoAvatar);
  $('#meu-link').attr('href', valorDoPerfil);
  ```

* Para **alterar texto interno** de elementos como `<p>`, `<h1>`, etc., foi usado `.text()`:

  ```javascript
  $('#meu-nome').text(json.name);
  ```

* Já o método `.val()` é exclusivo para **inputs de formulário**, como `input`, `textarea`, `select`.

### ⚠️ Erros Comuns e Soluções

* Foi identificado que IDs aplicados diretamente em `<li>` afetavam os elementos filhos (`<h4>`, `<p>`) ao fazer alterações com `.text()`.
  **Solução:** Criar uma `<p>` específica dentro do `<li>` e aplicar o ID nela, preservando a estrutura do layout original.

* A função `.val()` foi usada incorretamente em elementos de texto, retornando valores vazios. Após orientação do GPT, foi substituída por `.text()` conforme o tipo do elemento.

* A estrutura do `fetch` usada foi a clássica baseada em `.then()`, conforme visto com o professor. Embora o `try...catch` também fosse permitido, a versão com `then()` se encaixou melhor com o modelo adotado.

---

## ✅ Resultado Final

O projeto foi finalizado com sucesso. As informações da API do GitHub foram carregadas dinamicamente na interface da página. A estrutura HTML foi ajustada para garantir clareza e facilitar a manipulação com JavaScript/jQuery.
