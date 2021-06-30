import { Router } from 'express';
import pingRouter from './ping.router';

const router = Router();

router.use('/ping', pingRouter);

export default router;
