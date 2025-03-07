# MCC Front End Challenge

Este projeto é a solução para o desafio de front-end proposto pela MCC. O objetivo é criar uma interface web para visualizar dados de usuários, consumindo uma API pública.

## Sumário
- Funcionalidades
- Tecnologias Utilizadas
- Pré-requisitos
- Instalação
- Uso
- Estrutura de Pastas
- Considerações
- Autor
- Licença

### Funcionalidades
- Fazer login com dados da API ou Dados Master.
- Criação de Conta para visualizar a lista de usuários.
- Listagem de usuários com informações básicas (nome, email, etc.).
- Detalhes de cada usuário ao clicar em seu card.
- Responsividade para diferentes dispositivos.
- Implementação de filtros de pesquisa.

### Tecnologias Utilizadas
- React: Biblioteca JavaScript para criação de interfaces de usuário.
- Axios: Cliente HTTP para fazer requisições à API.
- Sass: Sass (Syntactically Awesome Style Sheets) é um pré-processador CSS que estende a funcionalidade do CSS padrão.
- React Router: Para criação de rotas na aplicação.
- React hook form: Uma biblioteca de gerenciamento de formulários para React que oferece desempenho excepcional e uma experiência de desenvolvimento simplificada.
- React toast: Uma biblioteca React leve e personalizável para exibir notificações toast.
- React icons: Para poder adicionar os ícone no projeto.
- Date fns: Uma biblioteca JavaScript leve e moderna para manipulação de datas.

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação
- Clone o repostório
```js
    git clone https://github.com/PFMJunior/mcc-front-end-challenge.git
```
- Nevegue até o diretório do projeto:
```js
    cd mcc-front-end-challenge
```
- Instale as dependências:
```js
    npm install
    # ou
    yarn install
```
### Uso
- Inicie o servidor de desenvolvimento:
```js
    npm start
    # ou
    yarn start
```
- Abra o navegador
```js
    # Verificar a porta no terminal
```
**Depois de abrir o projeto no seu navegador á três possiblidades de visualizar a lista de usúarios**
- 1° => **Com o login Master**
    - email: teste@minhacasaconstruida.com.br
    - senha: casaconstruida
- 2° => **Verificando o console da página principal e verificar os dados da API *email* e *login.pssword***
    - *Caso escolha essa opção cuidado, oa dados mudam a todo momento*
- 3° => **Efetuando um cadastro novo**
### Estrutura de Pastas
```js
    mcc-front-end-challenge/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── UserCard/
    │   │   ├── UserDetails/
    │   │   └── ...
    │   ├── pages/
    │   │   ├── UserList/
    │   │   └── ...
    │   ├── services/
    │   │   └── api.js
    │   ├── styles/
    │   │   └── global.js
    │   ├── App.js
    │   ├── index.js
    │   └── ...
    ├── package.json
    ├── README.md
    └── ...
```
- components: Contém os componentes reutilizáveis da aplicação.
- pages: Contém os componentes de página da aplicação.
- services: Contém a lógica de comunicação com a API.
- styles: Contém os estilos globais da aplicação.

### Considerações
- A API utilizada é uma API pública de usuários fictícios.
- O design da interface foi criado com foco na usabilidade e responsividade.
- Para facilitar a estilização, foi utilizado o Sass css.
- **E NÃO SE ESQUEÇA DE LER AS INSTRUÇÕES DE USO DA APLICAÇÃO**
### Autor
- PFMJunior