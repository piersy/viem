import { expect, test } from 'vitest'

import { accounts, publicClient, testClient } from '../../../test'
import { fetchTransactionCount } from '../account'
import { setNonce } from '../test/setNonce'

const targetAccount = accounts[0]

test('sets nonce', async () => {
  await setNonce(testClient, {
    address: targetAccount.address,
    nonce: 420,
  })
  expect(
    await fetchTransactionCount(publicClient, {
      address: targetAccount.address,
    }),
  ).toBe(420)
  await setNonce(testClient, {
    address: targetAccount.address,
    nonce: 69,
  })
  expect(
    await fetchTransactionCount(publicClient, {
      address: targetAccount.address,
    }),
  ).toBe(69)
})
