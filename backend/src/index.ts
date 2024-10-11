import 'dotenv/config';
import 'reflect-metadata';
import fastify from 'fastify';
import { Database } from './config/database';

const server = fastify({ logger: true });

server.get('/ping', async (request, reply) => {
  return 'pong\n';
});


(async function start() {
  try {
    await server.listen({ port: Number(process.env.PORT) });
    Database.initialize();
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();


