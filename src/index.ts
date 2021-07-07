/* eslint-disable no-console */

import app from './app';
import env from './utils/env';

app.listen(env.PORT, () => console.log(`Server is listening on port ${env.PORT}`));
