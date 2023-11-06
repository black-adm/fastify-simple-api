import { test, beforeAll, afterAll } from 'vitest'
import { app } from '../src/app'

import request from 'supertest'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('O usuário deve ser capaz de criar uma nova transação', async () => {
  await request(app.server)
    .post('/transactions')
    .send({
      title: 'Freelancer na 99Freelas',
      amount: 2000,
      type: 'credit',
    })
    .expect(201)
})
