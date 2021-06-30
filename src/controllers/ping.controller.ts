import { NextFunction, Request, Response } from 'express';

export const ping = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ message: 'Pong!' });
  } catch (e) {
    next(e);
  }
};
