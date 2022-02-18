// our-first-route.js

async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      return { hello: 'world' }
    })
  }
  
  module.exports = routes