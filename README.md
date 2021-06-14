# Desafio Prático Seteloc

## Enunciado Geral

O objetivo deste projeto é desenvolver uma API para uma votação.

Tempo Estimado: 7 dias de prazo

## Premissas
* Deve ser feito em ECMAScript;
* Deverá conter um README com instruções claras de dependências;
* Não pode haver dependência de serviços externos. A persistência dos dados pode ser feita por exemplo in-memory ou baseada em arquivos;
* Não é necessária preocupação com autenticação dos métodos ou cadastro dos participantes;
* Será avaliado além do funcionamento da API boas práticas de desenvolvimento de software.

## Detalhes

* A api deverá conter os métodos abaixo.

## [POST] http://localhost:3000/vote
> Essa chamada registra um voto para o participante A
```json
{
  "id": "f17bc320-5546-47df-ab44-ab4bfe6470f0" 
}
```

## [POST] http://localhost:3000/vote
> Essa chamada registra um voto para o participante B
```json
{
  "id": "93aa59ea-8116-4355-94b9-dedfe0564ef2" 
}
```

## Caso o voto seja feito com sucesso o código 200 deve ser retornado com o total de votos do participante votado.
```json
{
  "id": "93aa59ea-8116-4355-94b9-dedfe0564ef2",
  "count": 777
}
```

## Caso o voto seja feito para um id de participante que não existe o código 404 deve ser retornado.
```JSON
{
  "id": "6613315d-7687-4b20-acc9-6711d94c3a71",
  "message": "not found"
}
```

## [GET] http://localhost:3000/count?id=f17bc320-5546-47df-ab44-ab4bfe6470f0
> Essa chamada retorna o total de votos para um participante
```json
{ 
  "id": "f17bc320-5546-47df-ab44-ab4bfe6470f0",
  "count": 7777
}
```

## A API vai passar por um teste [AB](https://httpd.apache.org/docs/2.4/programs/ab.html). 10.000 requisições com 8.000 usuários simultaneous na API.


# Faça um fork do repositório e boa sorte ;)
