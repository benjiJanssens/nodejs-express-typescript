import app from 'app';
import request from 'supertest';

describe('PingController', () => {
  it('GET /ping should return "Pong!"', async () => {
    const result = await request(app).get('/ping').send();

    expect(result.status).toBe(200);
    expect(result.body.message).toBe('Pong!');
  });
});
