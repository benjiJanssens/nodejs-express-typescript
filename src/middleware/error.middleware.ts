/* eslint-disable @typescript-eslint/no-unused-vars */

import HttpError from 'errors/HttpError';
import { NextFunction, Request, Response } from 'express';

export default (error: HttpError, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = 'Unknown error' } = error;

  res.status(status).json({ message });
};
