import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export default (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: 'Validation errors', errors: errors.array() });
  }

  return next();
};
