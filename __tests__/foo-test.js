/* global
  describe
  expect
  jest
  it
*/

'use strict'

const FILE = '../'

jest.dontMock(FILE)

describe([
  'foo'
].join(' '), function () {
  it([
    'should export the empty object'
  ].join(' '), function () {
    const foo = require(FILE)

    expect(foo).toEqual({})
  })
})
