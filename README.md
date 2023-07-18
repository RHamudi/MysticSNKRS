<h1 align="center"> 
    MysticSNKRS
</h1>

<h1 align="center">
    <a href="https://mysticsnkrs.vercel.app/">Visite o projeto </a>
</h1>

## Preview

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG8xcmM3YndyZ2hhYWpsbmxodGUzZHlxZXFqbTdocmpkcGN6ZHhxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LMMhAvLybDbtiJdlA5/giphy.gif" />

## Sobre

O **MysticSNKRS E-commerce** é um projeto feito para ganhar experiência. Tentei replicar todas as funcionalidades de um e-commerce real e também colocar em prática algumas tecnologias e algumas práticas de otimização.

## Ferramentas

**Back End**
- Node
- Express
- MongoDB

**Front End**

- Next
- React-Hook-Form
- Redux
- React Query
- Axios


## Como rodar o projeto

- link Para clonar [API](https://github.com/RHamudi/api_ecommerce), utilize do mesmo processo para clonar e instalar a dependencia.

```bash
    #clonar projeto
    $ git clone https://github.com/RHamudi/MysticSNKRS.git
```

```bash
    #Entre no diretorio
    cd MysticSNKRS
```

```bash
    #Caso não tenha o yarn faça isso
    npm install --global yarn
    #Verifique se o yarn foi instalado
    yarn --version
    #Instale todas as dependencias
    yarn
```

```bash
    #Para rodar no ambiente Dev
    - Vá na pasta src/services
    - abra o arquivo http-client.ts
    #aqui voce vai mudar a variavel url para dev
    const axiosInstance = axios.create({
        baseURL: url,
    });
```
```bash
    #Iniciar projeto
    yarn run dev
```

## Versão

Ainda farei algumas modificações no projeto, que incluirão:

- Sistema de carrinho ( Já está pronto na api, só irei finalizar no front )
- Mudar para graphql, tanto na api quanto no front
- Refatorar algumas partes do codigo, para deixar mais organizado 
