import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';
import env from './utils/env';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN, optionsSuccessStatus: 200 }));
app.use(rateLimit({ max: env.RATE_LIMIT }));
app.use(morgan(env.MORGAN_FORMAT));

app.use(router);

export default app;
