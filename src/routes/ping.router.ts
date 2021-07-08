import * as PingController from 'controllers/ping.controller';
import { Router } from 'express';

const router = Router();

/**
 * @swagger
 *
 * /ping:
 *   get:
 *     tags:
 *       - Examples
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Pong!
 */
router.get('/', PingController.ping);

export default router;
