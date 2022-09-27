import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import { router } from './routes';

const server = express();

server.use(express.json());
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
server.use(router);

server.listen(3333);
