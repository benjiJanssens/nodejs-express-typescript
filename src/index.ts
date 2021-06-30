/* eslint-disable no-console */

import 'dotenv/config`';
import { cleanEnv, port } from 'envalid';
import app from './app';

cleanEnv(process.env, {
  PORT: port({ default: 3000 }),
});

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}!`));
