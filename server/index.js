const { ApolloServer } =require('apollo-server')

const typeDefs = require('./schema/schema')
const resolvers = require('./Resolver/resolvers')

const server =new ApolloServer({
typeDefs,resolvers
})

server.listen(3500).then(({url})=>
console.log(`server runnign at port ${url}`)
)