# biblioteca-virtual-backend
Backend da aplicação [biblioteca-virtual-frontend](https://github.com/edsonkz/biblioteca-virtual-frontend). Funciona com Node.js e MySQL.
## Instalação
Necessária versão node.js 16.15.1 e npm 8.11.0.
No diretório raiz da aplicação (o que possuir o arquivo package.json) inserir no seu terminal favorito o comando `npm install`.
Criar no diretório raiz arquivo `.env` com as informações referente a conexão com o banco (o contéudo do arquivo `.env.sample` é um exemplo do formato que `.env` deve ter).
### Formato do .env

-   `SECRET=` token utilizado para gera o JWT para validar os usuários
-   `DB_USER=` username do banco MySQL a ser conectado
-   `DB_ROOT_PASSWORD=` senha do banco MySQL a ser conectado
-   `DB_DATABASE=` nome do banco MySQL a ser conectado

## Executando
Atenção, o programa roda no PORT 3001, logo para funcionar, é necessário garantir que nenhuma outro serviço esteja funcionando nesse memso port.
- Preencha corretamente o arquivo ` .env`. É necessário ter o banco com o mesmo nome em `DB_DATABASE=` já criado.
- Execute no terminal executando na pasta raiz do projeto `npm start`
- Agora todos os endpoints são acessíveis pelo endereço `http://localhost:3001/`

## Pacotes Utilizados
- Express.js para criar um servidor simples e leve
- Sequelizer como ORM para tratar da conexão e operação com o banco de dados.
- bCrypt para gerar e validar hash das senhas.
- jsonwebtoken para gerar e validar token do usuário logado.
- esm para pode utilizar comandos baseados em EcmaScript mais atualizados.
- dotenv para ser possível utilizar arquivos .env.
- cors para liberar comunicação entre dois serviços executando como localhost.

## Endpoints

- get /api/book/nome-arquivo retorna arquivos em formato .pdf salvos.
- post /api/users/create cria usuários administradores ou normais.
- post /api/users/login faz login para usuários.
- post /api/books cria livros (Atenção, o frontend dessa aplicação funciona apenas com formato .pdf).
- get /api/books/:id acha livro pelo id.
- get /api/books/ acha todos os livros.
- post /api/readbook/ cria/ atualiza registro da leitura de um usuário a um livro.
- put /readbook/ atualiza registro de leitura de um usuário para finalizado.
- get /readbook/ acha todos os registros de leituras por usuários.
- get /readbook/all acha pelo registro de leitura seus respectivos usuários e livros lidos.
