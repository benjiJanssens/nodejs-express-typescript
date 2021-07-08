import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import errorMiddleware from 'middleware/error.middleware';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import router from './routes';
import env from './utils/env';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN, optionsSuccessStatus: 200 }));
app.use(rateLimit({ max: env.RATE_LIMIT }));
app.use(morgan(env.MORGAN_FORMAT));

app.use(router);

app.use(errorMiddleware);

if (env.isDev)
  app.use(
    '/swagger',
    swaggerUI.serve,
    swaggerUI.setup(
      swaggerJSDoc({
        swaggerDefinition: {
          openapi: '3.0.0',
          info: {
            title: 'nodejs-express-typescript',
            version: '1.0.0',
          },
        },
        apis: ['./src/swagger/**/*', './src/routes/**/*.router.ts'],
      })
    )
  );

export default app;
