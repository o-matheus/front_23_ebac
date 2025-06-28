# Módulo 23 - Ajax e Exceções

## Menu
[Aula 1 - Explorar a comunicação entre front-end e back-end](#aula-1---explora-a-comunicação-entre-front-end-e-back-end)  
[Aula 2 - ]()  
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
