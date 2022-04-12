const {ApolloServer}= require('apollo-server-express');
const express = require('express');
const {typeDefs} = require("./schema/TypeDefs");
const {resolvers} = require("./schema/resolvers");



const app = express();

const server = new ApolloServer({typeDefs,resolvers});

server.applyMiddleware({app});



app.listen({port:3001},()=>{
    console.log("Server running on port 3001");
});