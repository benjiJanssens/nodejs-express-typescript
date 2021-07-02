import * as PingController from 'controllers/ping.controller';
import { Router } from 'express';

const router = Router();

router.get('/', PingController.ping);

export default router;
