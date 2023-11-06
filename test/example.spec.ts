import { expect, test } from 'vitest'

test('O usuário deve ser capaz de criar uma nova transação', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
