# graphql & typescript & nodejs

## production dependencies
$ npm init -y
$ npm i express
$ npm i apollo-server-express@2.25.3
$ npm i pg
$ npm i typeorm
$ npm i reflect-metadata
$ npm i type-graphql

## development dependencies
$ npm i -D typescript ts-node @types/express @types/node nodemon

## configuration ts
$ npx tsc --init

## tsconfig.json
"rootDir": "./src", 
//"strict": true, /* Enable all strict type-checking options. */
"noImplicitAny": false, 
"outDir": "./dist",
"experimentalDecorators": true,
"emitDecoratorMetadata": true, 

## documentation
https://www.npmjs.com/package/typeorm/v/0.2.30

## run app
$ npm run dev

## endpoints
-create a recipe
-----------------
mutation {
  createRecipe(variables: {
      name: "soap",
      quantity: 2
  }) {
    id
    name
    quantity
    createdAt
  }
}
-delete a recipe
-----------------
mutation {
    deleteRecipe(id: 1) 
}

-update a recipe
-----------------
mutation {
  updateRecipe(id:1,
    fields: {              
    	quantity: 23
  })
}