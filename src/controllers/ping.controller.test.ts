import request from 'supertest';
import app from '../app';

describe('PingController', () => {
  it('GET /ping should return "Pong!"', async () => {
    const result = await request(app).get('/ping').send();

    expect(result.status).toBe(200);
    expect(result.body.message).toBe('Pong!');
  });
});
