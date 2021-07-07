# Desafio Prático Seteloc

## Sumário
- [Sobre](#sobre)
- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Instalação](#instalação)
  - [Clonando o repositório](#clonando-o-repositório)
  - [Dependências](#dependências)
- [Rodando a API](#rodando-a-api)
  - [Iniciar a API](#iniciar-a-api)
  - [Utilizando a API](#utilizando-a-api)
  - [Sugestão](#sugestão)
- [Enunciado Geral](#enunciado-geral)
  - [Premissas](#premissas)
  - [Detalhes](#detalhes)

## Sobre

Este desafio foi realizado por Saulo Kirchmaier Teixeira, como teste para a empresa SeteLoc.

## O que foi desenvolvido

Foi desenvolvido uma API (Application Programming Interface) de votação, possuindo 2 endpoints, um para adicionar um voto e outro para mostrar a quantidade de votos recebido por determinado participante.

## Instalação

### Clonando o repositório

- Caso tenha uma chave SSH cadastrada faça um [clone](https://docs.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) deste repositório com o comando no terminal:
  
  ```sh
    git clone git@github.com:saulokirchmaier/desafio-seteloc.git
  ```

- Caso não possua uma chave SSH utilize o comando a baixo no terminal:
  
  ```sh
    git clone https://github.com/saulokirchmaier/desafio-seteloc.git
  ```

- Ou se preferir faça um [fork](https://docs.github.com/pt/get-started/quickstart/fork-a-repo) desde repositório.

### Dependências

- Depois de clonar o repositório entre na pasta:

  ```sh
    cd desafio-seteloc  
  ```

- Dentro da pasta instale as dependências:

  ```sh
    npm install
  ```

  O comando acima instala as dependências de produção, ou seja, o que é necessário para rodar a aplicação, elas são listadas abaixo.
  
#### Dependências de Produção

- [Express.js](https://expressjs.com/pt-br/)
- [Body-Parser](https://www.npmjs.com/package/body-parser)
- [dotenv](https://www.npmjs.com/package/dotenv)

#### Dependências de Desenvolvimento

As Dependências de desenvolvimento abaixo são utilizadas para melhorar o codificação da aplicação, e não interferem no funcionamento da API. 

- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Eslint](https://eslint.org/)

## Rodando a API

### Iniciar a API

Com as instalações feitas, coloque a aplicação para rodar. Dentro da pasta 'desafio-seteloc', rode o comando:

  ```sh
    npm start
  ```
Esse comando inicia a aplicação em Node, agora podemos utilizá-la. Após a inicialização deve aparecer a seguinte mensagem no terminal:

  ```sh
    Server online on PORT 3000
  ```

### Utilizando a API

Agora a aplicação ja esta pronta para fazer as requisições nas rotas conforme os [detalhes](#detalhes) do [enunciado geral](#enunciado-geral).

### Sugestão

Para utilizar a aplicação instale o [Insomnia](https://insomnia.rest/), ou o [HTTPie](https://httpie.io/).

## Resultados

### Teste AB

  Utilizando o Apache HTTP server benchmarking tool foi feito um teste [AB](https://httpd.apache.org/docs/2.4/programs/ab.html) com 10.000 requisições com 8.000 usuários simultaneous na API.

  Resultado:

  ```sh
    ab -m post -n 10000 -c 8000 localhost:3000/vote
    This is ApacheBench, Version 2.3 <$Revision: 1843412 $>
    Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
    Licensed to The Apache Software Foundation, http://www.apache.org/

    Benchmarking localhost (be patient)
    Completed 1000 requests
    Completed 2000 requests
    Completed 3000 requests
    Completed 4000 requests
    Completed 5000 requests
    Completed 6000 requests
    Completed 7000 requests
    Completed 8000 requests
    Completed 9000 requests
    Completed 10000 requests
    Finished 10000 requests


    Server Software:        
    Server Hostname:        localhost
    Server Port:            3000

    Document Path:          /vote
    Document Length:        0 bytes

    Concurrency Level:      8000
    Time taken for tests:   1.629 seconds
    Complete requests:      10000
    Failed requests:        0
    Non-2xx responses:      10000
    Total transferred:      470000 bytes
    HTML transferred:       0 bytes
    Requests per second:    6138.71 [#/sec] (mean)
    Time per request:       1303.206 [ms] (mean)
    Time per request:       0.163 [ms] (mean, across all concurrent requests)
    Transfer rate:          281.76 [Kbytes/sec] received

    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0  366 481.0      0    1037
    Processing:    55  154 121.7    109     508
    Waiting:        3  154 121.7    108     508
    Total:         55  520 571.8    123    1537

    Percentage of the requests served within a certain time (ms)
      50%    123
      66%   1113
      75%   1148
      80%   1215
      90%   1365
      95%   1501
      98%   1517
      99%   1526
      100%   1537 (longest request)
  ```

## Enunciado Geral

O objetivo deste projeto é desenvolver uma API para uma votação.

Tempo Estimado: 7 dias de prazo

### Premissas 
  * Deve ser feito em NodeJS;
  * Deverá conter um README com instruções claras de dependências;
  * Não pode haver dependência de serviços externos. A persistência dos dados pode ser feita por exemplo in-memory ou baseada em arquivos;
  * Não é necessária preocupação com autenticação dos métodos ou cadastro dos participantes;
  * Será avaliado além do funcionamento da API boas práticas de desenvolvimento de software.

### Detalhes
  * A api deverá conter os métodos abaixo.

### [POST] http://localhost:3000/vote
  > Essa chamada registra um voto para o participante A
  ```json
  {
    "id": "f17bc320-5546-47df-ab44-ab4bfe6470f0" 
  }
```

### [POST] http://localhost:3000/vote
  > Essa chamada registra um voto para o participante B
  ```json
  {
    "id": "93aa59ea-8116-4355-94b9-dedfe0564ef2" 
  }
  ```

### Caso o voto seja feito com sucesso o código 200 deve ser retornado com o total de votos do participante votado.
  ```json
  {
    "id": "93aa59ea-8116-4355-94b9-dedfe0564ef2",
    "count": 777
  }
  ```

### Caso o voto seja feito para um id de participante que não existe o código 404 deve ser retornado.
  ```JSON
  {
    "id": "6613315d-7687-4b20-acc9-6711d94c3a71",
    "message": "not found"
  }
  ```

### [GET] http://localhost:3000/count?id=f17bc320-5546-47df-ab44-ab4bfe6470f0
  > Essa chamada retorna o total de votos para um participante
  ```json
  { 
    "id": "f17bc320-5546-47df-ab44-ab4bfe6470f0",
    "count": 7777
  }
  ```

### A API vai passar por um teste [AB](https://httpd.apache.org/docs/2.4/programs/ab.html). 10.000 requisições com 8.000 usuários simultaneous na API.


## Faça um fork do repositório e boa sorte ;)
