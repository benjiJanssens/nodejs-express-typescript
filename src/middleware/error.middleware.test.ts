/* eslint-disable @typescript-eslint/no-unused-vars */

import HttpError from 'errors/HttpError';
import { NextFunction, Request, Response } from 'express';
import errorMiddleware from './error.middleware';

describe('ErrorMiddleware', () => {
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };

  test('Responds with the HTTP status code and message of the thrown HttpError', async () => {
    const error = new HttpError(418, 'fake');

    await errorMiddleware(error, {} as Request, res as Response, {} as NextFunction);

    expect(res.status).toBeCalledWith(error.status);
    expect(res.json).toBeCalledWith({ message: error.message });
  });

  test("Responds with a generic HTTP status code and message if the error object doesn't have one", async () => {
    await errorMiddleware({} as HttpError, {} as Request, res as Response, {} as NextFunction);

    expect(res.status).toBeCalledWith(500);
    expect(res.json).toBeCalledWith({ message: 'Unknown error' });
  });
});
