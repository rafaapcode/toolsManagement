# Tools Management

Esta API é utilizada para simular o Gerenciamento de ferrametas.

## Endpoints
### GET /tools
Esta rota busca todas as ferramentas.
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso esta resposta aconteça, ela irá te retornar um array com todas as ferramentas cadastradas no Banco de Dados.

Exemplo :
```
    [
	{
		"id": "63614f843d8d5c3d2f906a56",
		"title": "oi",
		"link": "oitente",
		"description": "ola 123",
		"tags": [
			"Nodejs"
		]
	},
	{
		"id": "63614fa23d8d5c3d2f906a58",
		"title": "Teste2",
		"link": "Testando a nossa rota",
		"description": "teste da rota está ok",
		"tags": [
			"JS"
		]
	}
]

```

### GET /tools/:tag
Esta rota busca uma única ferramenta de acordo com o filtro.
#### Parametros
tag: tag que a ferramenta contém

Exemplo:
```
    http://localhost:3000/tools/JS

```

#### Respostas
##### OK! 200
Caso esta resposta aconteça, ela irá te retornar uma ferramenta de acordo com a tag.

Exemplo :
```
    {
	    "_id": "63614fa23d8d5c3d2f906a58",
	    "title": "Teste2",
	    "link": "Testando a nossa rota",
	    "description": "teste da rota está ok",
	    "tags": [
	    	"JS"
	    ],
	    "__v": 0
    }

```

##### Ferramenta não encontrada! 404
Caso esta resposta aconteça, ela irá retornar uma mensagem , falando que a ferramenta não foi encontrada.

Exemplo :
```
    {
        message: 'Ferramenta não existe.',
    }

```


### POST /tools
Esta rota cria uma ferramenta.
#### Parametros
title: titulo da ferramenta
link: link da ferramenta
description: descrição da ferramenta
tags: array com todas as tags relacionadas a ferramenta

Exemplo:
```
    {
	    "title": "Teste2",
	    "link": "Testando a nossa rota",
	    "description": "teste da rota está ok",
	    "tags": ["JS"]
    }

```

#### Respostas
##### OK! 200
Caso esta resposta aconteça, ela irá te retornar a ferramenta criada.

Exemplo :
```
    {
	    "_id": "63614fa23d8d5c3d2f906a58",
	    "title": "Teste2",
	    "link": "Testando a nossa rota",
	    "description": "teste da rota está ok",
	    "tags": [
	    	"JS"
	    ],
	    "__v": 0
    }

```

##### Algum campo não enviado! 400
Caso esta resposta aconteça, ela irá retornar uma mensagem , falando que um dos campos obrigatórios não foi enviado.

Exemplo :
```
    {
	    "message": "Mande um título válido"
    }

```

### DELETE /tools/:id
Esta rota deleta uma ferramenta de acordo com o ID passado.
#### Parametros
id: ID da ferramenta que se deseja excluir.

Exemplo:
```
    http://localhost:3000/tools/63614fa23d8d5c3d2f906a58

```

#### Respostas
##### OK! 200
Caso esta resposta aconteça, ela irá te retornar uma mensagem falando que a ferramenta foi deletada com sucesso

Exemplo :
```
    {
	    "message": "Ferramenta deletada com sucesso !"
    }

```

##### Ferramenta não existe! 404
Caso esta resposta aconteça, ela irá retornar uma mensagem , falando que a ferramenta não existe.

Exemplo :
```
    {
	    "message": "Ferramenta não existe."
    }

```


### PUT /tools/:id
Esta rota adiciona uma tag à ferramenta relacionada com o ID.
#### Parametros
id: ID da ferramenta que se deseja excluir.
tags: Array de tags que deseja adicionar.


Exemplo:
```
    http://localhost:3000/tools/63614fa23d8d5c3d2f906a58

    {
	    "tags": ["REACT"]
    }

```

#### Respostas
##### OK! 200
Caso esta resposta aconteça, ela irá te retornar uma mensagem falando que as tags foram adicionadas.

Exemplo :
```
    {
	    "message": "Tags adicionadas"
    }

```

##### Ferramenta não existe! 404
Caso esta resposta aconteça, ela irá retornar uma mensagem , falando que a ferramenta não existe.

Exemplo :
```
    {
	    "message": "Ferramenta não existe."
    }

```

##### Tags não enviadas! 400
Caso esta resposta aconteça, ela irá retornar uma mensagem , falando que devem ser enviadas tags para a atualização da ferramenta.

Exemplo :
```
    {
	    "message": "Envie algum conteúdo para atualizar a ferramenta."
    }

```