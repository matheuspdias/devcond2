<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

# API Para o projeto DevCond( Gestão de condominio )
Esta API é utilizada para o Aplicativo de gestão de condominio ( DevCond )

# Executando com o Docker

  Entre na pasta da api

  - cd devcondapi

  - Crie o arquivo .env na raiz (Cole nele o conteudo do .env-example)

  Dê permisssão para o storage
  - chmod 777 -R storage/*

  rode os seguintes comandos na sequencia
  
  - docker-compose up -d

  - docker-compose run composer update

  - docker-compose run composer install

  - docker-compose run artisan key:generate

  - docker-compose run artisan jwt:secret

  - docker-compose run artisan migrate

  - docker-compose run artisan db:seed
  
 ### Após os comandos a api estará executando em localhost:7000


## Endpoints
### BASEURL: http://localhost:8000/api

### POST /auth/login
Esse endpoint é responsavel por fazer a autenticação do usuario.
#### Parametros

cpf: CPF do usuario cadastrado no sistema

password: Senha do usuario cadastrado no sistema, com aquele determinado cpf
#### Respostas
##### OK! 200
Caso o cpf e o password estiverem corretos a autenticação sera realizada e retornara um token, informações do usuarios e propriedades.

Exemplo de resposta:
```
{
   "error":"",
   "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxMjU4NjkzOSwibmJmIjoxNjEyNTg2OTM5LCJqdGkiOiJBamlwT0hwbE9lcTRUUVRmIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.qHRrcoSF5IRslYDryyk768yft4KnNIOiPepPmb5gKhY",
   "user":{
      "id":1,
      "name":"Matheus",
      "email":"matheus@gmail.com",
      "cpf":"12345678911",
      "properties":[
         {
            "id":1,
            "name":"APT 100"
         },
         {
            "id":2,
            "name":"APT 101"
         }
      ]
   }
}
```
```

```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu aconteceu alguma falha durante o processo de autenticação da requisição. Motivos: Token inválido, Token expirado.
Exemplo de responta:
```
{
   "error":"N\u00e3o autorizado"
}
```

### POST /auth/register
Esse endpoint é responsavel por cadastrar um novo usuario no sistema
### Parametros
name: Nome do usuario,
email: Email do usuario,
cpf: cpf com 11 digitos(apenas numeros),
password: senha do usuario,
password_confirm: confirmação de senha (deve ser a mesma do campo password)

#### Resposta
##### OK! 200
Caso todos os dados estiverem corretos irá cadastrar o usuario e ja logar ele no sistema.

Exemplo de resposta:
```
{
   "error":"",
   "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTYxMjU4NzgyOCwibmJmIjoxNjEyNTg3ODI4LCJqdGkiOiI4M0w2bzBxcHo3WjFDWFVUIiwic3ViIjoyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.-AHaq44r034_2ZyGfExy5OPOrd2A_XUtrBPssb8N6Xo",
   "user":{
      "id":2,
      "name":"Testador",
      "email":"testador@gmail.com",
      "cpf":"12345678911",
      "properties":[
         
      ]
   }
}
```

## ------ Endpoints mural de avisos ------
### POST /walls
Esse endpoint é responsavel por buscar todos avisos do mural de avisos
### Parametros
token: token do usuario, pode ser enviado pelo corpo da requisição ou pelo header Authorization = Bearer +token

#### Respostas
##### OK! 200
retornara todos avisos do mural 

Exemplo de resposta:
```
{
   "error":"",
   "list":[
      {
         "id":1,
         "title":"T\u00edtulo de Aviso de Teste",
         "body":"Lorem ipsum blablalba  lorem ipsim",
         "datecreated":"2020-12-20 15:00:00",
         "likes":1,
         "liked":false
      },
      {
         "id":2,
         "title":"Alerta geral para todos",
         "body":"Cuidado com blablalba  lorem ipsim",
         "datecreated":"2020-12-20 18:00:00",
         "likes":0,
         "liked":false
      }
   ]
}
```

### POST /wall/{ id do aviso }/like
Esse endpoint é responsavel por adicionar ou remover o like de um aviso
#### Parametros
token: token do usuario, pode ser enviado pelo corpo da requisição ou pelo header Authorization = Bearer +token

#### Respostas
##### OK! 200
Se não tiver o like no aviso ele irá adicionar caso contrario irá retirar.

Exemplo de resposta:
```
{
   "error":"",
   "liked":true,
   "likes":2
}
ou
{
   "error":"",
   "liked":false,
   "likes":1
}
```

## ------ Endpoints documentos ------
### GET /docs
Esse endpoint é responsavel por buscar todos documentos geral.
#### Parametros
token: token do usuario, pode ser enviado pelo corpo da requisição ou pelo header Authorization = Bearer +token

#### Respostas
##### OK! 200
Irá listar todos documentos

Exemplo de resposta:
```
{
   "error":"",
   "list":[
      {
         "id":1,
         "title":"Regras do condominio",
         "fileurl":"http:\/\/127.0.0.1:8000\/storage\/regras.pdf"
      },
      {
         "id":2,
         "title":"Financeiro de Dez\/20",
         "fileurl":"http:\/\/127.0.0.1:8000\/storage\/fin_dez20.pdf"
      }
   ]
}
```

## ------ Endpoints Livro de ocorrências ------
### GET /warnings
Esse endpoint é responsavel por buscar todos as ocorrencias registrada por sua propriedade .
#### Parametros
token: token do usuario, pode ser enviado pelo corpo da requisição ou pelo header Authorization = Bearer +token
property: id da propriedade(unit)

#### Respostas
##### OK! 200
Irá listar todas as ocorrências registradas naquela propriedade

Exemplo de resposta:

```
{
   "error":"",
   "list":[      
      {
         "id":2,
         "id_unit":2,
         "title":"Vizinho chato via api",
         "status":"IN_REVIEW",
         "datecreated":"12\/01\/2021",
         "photos":[
            
         ]
      },
      {
         "id":1,
         "id_unit":2,
         "title":"Vizinho \u00e9 chato",
         "status":"IN_REVIEW",
         "datecreated":"12\/01\/2021",
         "photos":[
            "http:\/\/127.0.0.1:8000\/storage\/foto1.jpg",
            "http:\/\/127.0.0.1:8000\/storage\/foto2.jpg"
         ]
      }
   ]
}
```

### POST /warning/file
Esse endpoint irá adicionar a imagem ao localstorage e retornar a url dela para possiveis envio.
#### Parametros
token: token do usuario, pode ser enviado pelo corpo da requisição ou pelo header Authorization = Bearer +token
photo: url da imagem. Este campo deve ser enviado como arquivo(File)
#### Respostas
##### OK! 200
Caso a imagem for adicionada irá retornar a url pronta da mesma.

Exemplo de resposta:
```
{
   "error":"",
   "photo":"http:\/\/127.0.0.1:8000\/storage\/5n1rH9TjrwjausaUUrlHrfc1X5ZdV8chcCcSzHpo.png"
}
```

### POST /warning
Esse endpoint é responsavel por Adicionar uma nova ocorrencia.
#### Parametros
token: token do usuario, pode ser enviado pelo corpo da requisição ou pelo header Authorization = Bearer +token
title: titulo da ocorrência
property: id da propriedade(unit)
list: um array de fotos (opcional)
você pode enviar mais de uma foto assim:
list[0] = url da foto
list[1] = url da foto

#### Respostas
##### OK! 200
Caso o error retorne vazio a ocorrência foi adicionada com sucesso

Exemplo de resposta:

```
{
   "error":""
}
```
Possiveis erros:
```
{
   "error":"O campo property \u00e9 obrigat\u00f3rio."
}
ou
{
   "error":"O campo t\u00edtulo \u00e9 obrigat\u00f3rio."
}
```

## ------ Endpoints de boletos ------

### GET /billets
Esse endpoint é responsavel por buscar os boletos daquela propriedade.
#### Parametros
token: token do usuario, pode ser enviado pelo corpo da requisição ou pelo header Authorization = Bearer +token
property: id da propriedade(unit)

#### Respostas
##### OK! 200
Caso erro retorne vazio irá listar todos boletos daquele propriedade

Exemplo de resposta:
```
{
   "error":"",
   "list":[
      {
         "id":1,
         "id_unit":1,
         "title":"Dez\/20",
         "fileurl":"http:\/\/127.0.0.1:8000\/storage1_dez20.pdf"
      }
   ]
}
```


