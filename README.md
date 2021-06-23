# auth-api-tdd
auth-api-tdd

## express server

yarn add express

## database 

yarn add sequelize pg

yarn add sequelize-cli -D

yarn sequelize init

## create a database 

docker run --name nodeauth -e POSTGRES_USER=nodetest -e POSTGRES_PASSWORD=kyxxp2 -e POSTGRES_DB=nodeauthdb -p 5432:5432 -d postgres

## migrations

yarn sequelize migration:create --name=create-users

## rodar a migrations para criara tabela na bd

yarn sequelize db:migrate

## rodando a aplicação 

 node src/server.js

 ## rodando servidor de dev

 nodemon

 ## tests com Jest

 yarn add jest -D

 yarn jest --init

 ## Tests unitários 

 Serve para testes de funções puros 

 ## testes de integrations

 cadastro o banco de dados
 Chamadas de APIs

 ## dotenv

 yarn add dotenv

 ## tests with database sqlite

 yarn add sqlite3 -D

 ## tests sqlite

 yarn NODE_ENV=test sequelize migration:create --name=create-users

 // it('Test user creation', async () => {

  //   const user = await User.create({ 
  //     name: 'Kelson Anthony', 
  //     email: 'kanthony@ebsco.com', 
  //     password_hash: '123456789'
  //   });

  //   console.log('test user', user);

  //   expect(user.email).toBe('kanthony@ebsco.com');
  // });

 ## tests super tests

 yarn add supertest -D

 ## JSON Web Token

 yarn add jsonwebtoken

 ## Feature Girl

 yarn add factory-girl

 ## Lib Faker to user tests

 yarn add faker