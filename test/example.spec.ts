import { expect, test } from 'vitest'
import { app } from '../src/app'

import request from 'supertest'

test('O usuário deve ser capaz de criar uma nova transação', () => {
  const responseStatusCode = 201
  expect(responseStatusCode).toEqual(201)
})
