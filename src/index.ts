/* eslint-disable no-console */

import 'dotenv/config';
import app from './app';
import env from './utils/env';

app.listen(env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));
