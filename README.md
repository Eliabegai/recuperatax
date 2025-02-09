# Projeto React com JSON Server
Este projeto foi desenvolvido utilizando ```Next.Js```,```React.j```, ```TailwindCSS```. 
Ele depende de um ```JSON Server``` para fornecer alguns dados simulados.

## Tecnologias Utilizadas

- ```NextJs```
- ```React.js```
- ```JSON Server```
- ```TailwindCSS```



## Como Rodar o Projeto
### Clonar o Repositório

```sh
git clone https://github.com/Eliabegai/recuperatax.git
cd recuperatax
```
### Instalar as Dependências

```sh
npm install
```

## Iniciar o JSON Server

Antes de rodar o frontend, é necessário iniciar o JSON Server:

```sh
npm install -g json-server@0.17.0 //caso não tenha instalado
json-server --watch db.json --port 3001
or
npm run server
```

Isso fará com que a API falsa rode na porta `3001`.

### Rodar o Projeto React

Em outra aba do terminal, na raiz do projeto e inicie o frontend:

```sh
npm run dev
```

Abrir outra instancia do terminal:
```bash
npm run server
```
Agora, o projeto estará disponível em `http://localhost:3000`.

## Evidências

### Tela de Login
![Tela de Login](/public/Login.png)

### Empresas
![Empresas](/public/Empresas.png)

### Sidebar
![Sidebar](/public/Sidebar.png)

### Cadastro Empresas
![Cadastro Empresas](/public/Cadastro.png)

### Planilhas
![Planilhas](/public/Planilhas.png)