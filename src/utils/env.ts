import 'dotenv/config';
import { cleanEnv, num, port, str } from 'envalid';

export default cleanEnv(process.env, {
  PORT: port({ default: 3000 }),
  CORS_ORIGIN: str({ default: '*' }),
  RATE_LIMIT: num({ default: 60, devDefault: 0 }),
  MORGAN_FORMAT: str({
    default: 'common',
    devDefault: 'dev',
    choices: ['combined', 'common', 'dev', 'short', 'tiny'],
  }),
});
