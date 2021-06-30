import { Router } from 'express';
import * as PingController from '../controllers/ping.controller';

const router = Router();

router.get('/', PingController.ping);

export default router;
