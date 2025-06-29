# Módulo 23 - Ajax e Exceções

## Menu
[Aula 1 - Explorar a comunicação entre front-end e back-end](#aula-1---explora-a-comunicação-entre-front-end-e-back-end)  
[Aula 2 - Faça requisições AJAX com XMLHttp ](#aula-2---faça-requisições-ajax-com-xmlhttp-request)  
[Aula 3 - ]()  
[Aula 4 - ]()  
[Aula 5 - ]()  

## Aula 1 - Explora a comunicação entre front-end e back-end

### Objetivos da aula

* Conceituar e entender a estrutura de URL;
* Definir e compreender a estrutura de HTTP;
* Compreender os conceitos fundamentais da comunicação entre front-end e back-end;
* Familiarizar-se com métodos HTTP.

---

### A importância da comunicação entre front-end e back-end

No início da aula, o professor ressaltou que um dos aspectos mais importantes para o programador moderno é entender como ocorre a comunicação entre a parte visual da aplicação (o front-end) e a estrutura de dados e lógica (o back-end).

Essa comunicação está presente em praticamente tudo: desde uma tela de login, passando por páginas de produto e exibição de aulas, até sistemas de autenticação, pagamentos e muito mais. Sempre que há interação entre o que o usuário vê e o que acontece por trás, existe um fluxo entre front e back.

---

### Estrutura de uma URL

A URL (Uniform Resource Locator) é composta por três partes principais:

1. **Domínio principal:** é o endereço-base do site, como `meusite.com.br`, `google.com`, `flatout.com.br`, entre outros. Representa o contato inicial com o sistema.

2. **Recurso (path):** aparece após a primeira barra (`/`) e indica a seção que o usuário está acessando, como `/produtos`, `/login`, `/contato`, etc.

3. **Query parameters:** são parâmetros adicionais que detalham o conteúdo acessado, por exemplo: qual produto está sendo visualizado, qual o tamanho ou marca. Exemplo: `?marca=nike&tamanho=39`.

Além disso, foi explicado o papel dos **subdomínios**, que servem para organizar diferentes áreas de um mesmo site. Por exemplo: `admin.mabiviagens.com.br` pode ser a área administrativa e `cliente.mabiviagens.com.br` a área de acesso ao cliente.

---

### Introdução ao HTTP

O HTTP (HyperText Transfer Protocol) é o protocolo responsável por intermediar a comunicação entre o front-end e o servidor. Ele é quem realiza as trocas de dados entre o navegador e o sistema.

Há também o HTTPS, que inclui um certificado de segurança e é a versão recomendada para aplicações modernas.

A estrutura típica de uma URL completa inclui o protocolo (`https`), o domínio, o recurso e os parâmetros. Exemplo:

```
https://meusite.com.br/produtos?categoria=camisetas&tamanho=m
```

---

### Componentes de uma requisição HTTP

A requisição HTTP pode conter:

* **Método (verbo):** define o tipo de ação a ser executada:

  * `GET` – buscar dados (ex: listagem de produtos);
  * `POST` – enviar dados (ex: cadastro de usuário ou curtida);
  * `PUT` – atualizar dados (ex: editar nome ou comentário);
  * `DELETE` – remover dados.

Esses quatro verbos fazem parte do padrão conhecido como **CRUD** (Create, Read, Update, Delete).

* **Headers (cabeçalhos):** contêm informações adicionais, como tipo de conteúdo, origem da requisição, dados de autenticação, entre outros. Por exemplo, quando se importa um favicon, CSS ou conecta com um banco de dados.

* **Body:** corpo da requisição, onde podem estar os dados enviados para o servidor (como um formulário preenchido). O uso do body varia de acordo com o método HTTP.

---

### Estrutura da resposta HTTP

A resposta também possui estrutura semelhante:

* **Status code:** código que indica o resultado da requisição (ex: `200` para sucesso).
* **Headers:** informações adicionais sobre a resposta.
* **Body:** opcional, pode conter dados enviados de volta pelo servidor.

---

### Trabalhando com JSON

O professor introduziu o **JSON (JavaScript Object Notation)** como o formato mais comum de comunicação entre front e back. Ele é composto por pares de chave e valor:

```json
{
  "nome": "Mateus"
}
```

Os objetos JSON são envoltos por chaves `{}` e podem ser organizados em arrays, com vários elementos indexados (índice 0, 1, 2, etc).

No exemplo mostrado na aula, o professor utilizou o modo desenvolvedor do navegador (atalho `F12`) e acessou uma API com dados de câmbio. A resposta retornava em formato JSON, com campos como `moeda`, `valor de compra`, `valor de venda` e `data`.

---

### Explorando a aba "Rede" no navegador

A aba "Network" do DevTools permite visualizar detalhes técnicos das requisições e respostas:

* **Request URL:** endereço acessado;
* **Method:** método HTTP utilizado (GET, POST, etc);
* **Status:** código de status da resposta;
* **Headers:** divididos entre geral, solicitação e resposta;
* **Cookies:** podem ser analisados pela aba correspondente. Alguns cookies como `GA` são do Google Analytics;
* **Timing:** mostra o tempo de cada etapa da requisição (espera, download, resposta, etc);
* **Response:** mostra o conteúdo da resposta, normalmente em JSON formatado.

---

### Introdução ao conceito de API REST

Foi apresentado o conceito de **API (Application Programming Interface)** como um ponto de comunicação entre aplicações. Já o **REST (Representational State Transfer)** é um estilo arquitetural que define como essas APIs devem ser organizadas e acessadas.

O professor destacou que APIs REST serão estudadas mais profundamente no back-end, mas é importante já entender que elas são a ponte entre sistemas distintos.

---

### Más práticas ao expor rotas

A aula finalizou com uma reflexão sobre boas e más práticas ao construir URLs. O professor chamou atenção para o risco de deixar ações sensíveis muito explícitas nas rotas (como `/editar`, `/deletar`), o que pode representar uma vulnerabilidade.

O ideal é utilizar uma estrutura que oculte ou abstraia essas ações, utilizando métodos HTTP corretamente e protegendo rotas com autenticação.

---

### Resumo da Aula 1

* Compreendemos a importância da comunicação entre front-end e back-end em qualquer sistema digital;
* Estudamos a estrutura de uma URL e seus componentes (domínio, recurso e query parameters);
* Entendemos o funcionamento do protocolo HTTP/HTTPS e suas partes (método, headers e body);
* Exploramos os métodos HTTP básicos e a lógica por trás do CRUD (Create, Read, Update, Delete);
* Conhecemos o formato JSON e como ele é usado para troca de dados entre cliente e servidor;
* Analisamos como utilizar o DevTools para inspecionar requisições, respostas, cookies e tempos de carregamento;
* Fomos introduzidos ao conceito de API REST e sua importância para integração entre sistemas;
* Refletimos sobre boas práticas no uso de rotas para garantir segurança e evitar exposição indevida de ações sensíveis.

## Aula 2 - Faça requisições AJAX com XMLHTTP Request

### Objetivos da aula

* Compreender o conceito de requisições AJAX e sua importância na construção de aplicativos web interativos;
* Aprender a usar a API `XMLHttpRequest` para fazer requisições AJAX;
* Implementar uma requisição AJAX prática em um formulário web.

---

### Estrutura do projeto e proposta da atividade

Nesta aula, o objetivo foi criar um formulário simples que realiza uma requisição a uma API de CEP. O usuário digita um CEP, clica em um botão de busca e, automaticamente, os campos de **rua**, **bairro**, **município** e **estado** são preenchidos com os dados retornados.

O projeto foi estruturado com base no uso de múltiplos arquivos HTML para organizar melhor as demonstrações. O layout foi montado com o CSS do Bootstrap (sem uso do JS da biblioteca), utilizando classes como `container`, `row`, `col-*`, `mt-*` e `btn btn-success` para estilizar e estruturar o conteúdo visual do formulário.

---

### Primeira implementação com `XMLHttpRequest`

O professor iniciou a requisição com a abordagem tradicional, utilizando `XMLHttpRequest`.

Primeiro, foi garantido que o DOM estivesse carregado antes de executar qualquer ação JavaScript:

```javascript
document.addEventListener('DOMContentLoaded', function () {
  // lógica
});
```

Em seguida, foi criado um botão para acionar a busca. IDs específicos foram atribuídos aos campos de CEP e endereço para facilitar a manipulação via JS. Um erro comum enfrentado nesse processo foi a discrepância entre o ID escrito no HTML e o que foi utilizado no JavaScript, impedindo a execução correta da função — corrigido ao padronizar os nomes.

Para capturar o valor do CEP, foi necessário usar `.value` ao final do `getElementById`:

```javascript
const cep = document.getElementById('cep').value;
```

A URL do endpoint da API foi montada com template string, usando crase:

```javascript
const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
```

Depois disso, a requisição foi aberta com `xhttp.open()` e enviada com `xhttp.send()`:

```javascript
const xhttp = new XMLHttpRequest();
xhttp.open('GET', endpoint);
xhttp.send();
```

Esse processo básico foi funcional, mas extenso. A seguir, o professor apresentou uma forma alternativa utilizando **jQuery**.

---

### Requisição com jQuery

Foi adicionada a biblioteca jQuery ao projeto e, em seguida, replicada a lógica anterior usando seu formato reduzido e mais expressivo.

Um erro inicial foi a ordem de carregamento dos scripts: o script principal do projeto foi incluído **antes** do jQuery, o que causava erro de referência (`$ is not defined`). A correção foi inverter essa ordem.

Para aguardar o carregamento do DOM, foi usado:

```javascript
$(document).ready(function () {
  // lógica
});
```

A lógica do botão de busca foi reescrita com jQuery:

```javascript
$('#btn-buscar-cep').click(function () {
  const cep = $('#cep').val();
  const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

  $.ajax(endpoint).done(function (resposta) {
    const logradouro = resposta.logradouro;
    const bairro = resposta.bairro;
    const cidade = resposta.localidade;
    const estado = resposta.uf;

    $('#endereco').val(logradouro);
    $('#bairro').val(bairro);
    $('#cidade').val(cidade);
    $('#estado').val(estado);
  });
});
```

A função `.val()` foi explicada:

* Se chamada **sem argumento**, retorna o valor atual do campo;
* Se chamada **com um argumento**, define o valor do campo.

---

### Melhoria visual com Bootstrap Icons e animação de carregamento

Para deixar a aplicação mais profissional, o botão de busca foi estilizado com um ícone do **Bootstrap Icons**, substituindo o texto por:

```html
<i class="bi bi-search"></i>
```

Além disso, foi incluído um `spinner` de carregamento:

```html
<span class="spinner-border spinner-border-sm d-none"></span>
```

Com o uso de `display: flex` e controle via `addClass()` e `removeClass()` com jQuery, foi feita a troca dinâmica dos elementos:

* Antes da requisição:

  * Ícone de lupa é escondido;
  * Spinner aparece.

* Após a requisição:

  * Spinner é escondido;
  * Lupa reaparece.

Essa troca foi feita inicialmente com `this.find()`, mas no final da requisição foi necessário referenciar o botão pelo ID direto (`$('#btn-buscar-cep')`).

---

### Delay intencional com `setTimeout`

Para evitar que o spinner desapareça instantaneamente, foi adicionado um pequeno atraso (2 segundos) com `setTimeout`, garantindo que o usuário perceba o carregamento:

```javascript
setTimeout(function () {
  // código para inverter novamente os ícones
}, 2000);
```

---

### Máscara de input com jQuery Mask

Para formatar a entrada do CEP, foi utilizado o **jQuery Mask Plugin**. Após importar o plugin, a máscara foi aplicada com:

```javascript
$('#cep').mask('00000-000');
```

Essa formatação garante que o usuário digite o CEP no formato correto (`12345-678`), melhorando a experiência e prevenindo erros de requisição.

---

### Resumo da Aula 2

* Construímos um formulário interativo com Bootstrap e realizamos requisições AJAX para uma API de CEP;
* Aplicamos duas formas de fazer requisições: `XMLHttpRequest` e `jQuery.ajax()`;
* Aprendemos sobre `.val()`, `addClass()`, `removeClass()` e a manipulação visual com Bootstrap Icons;
* Incluímos um spinner de carregamento com atraso controlado por `setTimeout`;
* Aplicamos máscara de input com jQuery Mask;
* Corrigimos erros de ordem de script e IDs entre HTML e JS.

---

**🔖 Lembrete de estudo adicional:**
Revisar e praticar os conceitos de:

* `fetch()`
* `Promises` (`then`, `catch`)
* `async/await` com `try/catch`

## Aula 3 – Faça requisições AJAX com Fetch API

### 🎯 Objetivos da aula

* Compreender como fazer requisições assíncronas utilizando a **Fetch API**;
* Configurar uma requisição com Fetch API, incluindo método HTTP e URL;
* Entender como tratar e manipular as respostas, incluindo tratamento de erros e execuções.

---

### ✅ Introdução à Fetch API

Nessa aula, o foco foi substituir o uso de requisições AJAX feitas com `XMLHttpRequest` ou `jQuery.ajax()` pela abordagem mais moderna e nativa do JavaScript: a **Fetch API**. Essa API permite realizar comunicações assíncronas com servidores de forma mais simples e legível, sem a necessidade de bibliotecas externas.

---

### 🧱 Estrutura da requisição com Fetch

Como o curso ainda não introduziu **arrow functions** ou `async/await`, o professor utilizou a forma mais tradicional de escrita com funções anônimas:

```javascript
fetch(endpoint)
  .then(function(resposta) {
    return resposta.json();
  })
  .then(function(json) {
    console.log(json);
  });
```

#### Explicação:

* O primeiro `.then()` recebe a resposta e extrai seu conteúdo como JSON com `resposta.json()`;
* O segundo `.then()` lida diretamente com os dados e imprime no console para inspeção.

---

### 🔄 Substituindo AJAX com Fetch

O professor demonstrou como **trocar a requisição feita com jQuery.ajax** pela estrutura equivalente usando `fetch`. A lógica se manteve a mesma:

* Definir o `endpoint`;
* Fazer a requisição;
* Tratar a resposta JSON;
* Atualizar os campos da interface (logradouro, bairro, cidade, estado);
* Usar `setTimeout` para simular tempo de carregamento.

Essa substituição também reaproveitou as estruturas anteriores como o `setTimeout` e o controle visual com classes CSS (`display: none`) para exibir ou esconder o spinner de carregamento.

---

### 🧠 Impressões durante o teste

Durante o processo, foi percebido que a transição visual entre o botão de busca e o ícone de carregamento pode causar a falsa impressão de lentidão na requisição. No entanto, em testes subsequentes, a performance se mostrou equivalente à solução com AJAX.

---

### 📌 Lembrete de estudo

Foi anotado como importante reforçar o estudo dos seguintes tópicos para consolidar o entendimento das técnicas modernas:

* `fetch()` e sua estrutura;
* Promises e encadeamento com `.then()`;
* `async/await` com `try/catch` para tratamento de erros;
* Arrow Functions (funções de seta) no JavaScript.
