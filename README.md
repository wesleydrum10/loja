# Shopping Online Store.

Este projeto tem por objetivo simular uma loja online de produtos eletrônicos. NÃO PODENDO REALIZAR COMPRAS REAIS!

## Índice

- [Instalação](#instalação)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Criado por:](#criado)

## Instalação

Para instalar as dependências do projeto use: 
```bash
npm install
```
ou
```bash
yarn install
```

Criei uma api com json-server para listar os produtos. Antes de rodar o projeto, digite o seguinte comando para ativar a api no localhost da sua máquina. Ao rodar esse comando, ele vai usar a porta 3000 por padrão. É extremamente importante usar a porta 3000, pois a configuração da url da api no projeto, está apontando para essa porta. Por favor verifique se não existe algum outro projeto rodando.

```bash
npx json-server --watch .\src\database\products.json
````
Para rodar o projeto 
```bash
npm run dev
```
ou 
```bash
yarn dev
```

## Tecnologias

- [React](https://pt-br.legacy.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Json-server](https://www.npmjs.com/package/json-server/v/0.17.1)
- [Styled-Components](https://styled-components.com)

## Funcionalidades

- Tela de listagem de produtos com filtros de nome, data de inclusão, e preço do produto.
- Ordenação por data de inclusão e preço.
- Adicionar o produto na sacola selecionando o card do produto.
- Botão de adicionar mostra a quantidade de produtos adicionados.
- Ao clicar na sacola, mostra um resumo dos produtos adicionados, com imagem botão para icrementar e decrementar produto. Totalizador do valor de cada produto x quantidade.
- Botão de Ir para tela checkout na sacola quando tiver produtos.
- Mensagens de erro, informação e sucessso.
- Layout responsivo.

  ## Criado por [@wesley](https://www.linkedin.com/in/wesley-oliveira-sistemasinformacao/)


