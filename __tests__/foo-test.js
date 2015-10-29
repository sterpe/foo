/* global
  describe
  expect
  jest
  it
*/

'use strict'

const file = '../'

jest.dontMock(file)

describe([
  'foo'
].join(' '), function () {
  it([
    'should export the empty object'
  ].join(' '), function () {
    const foo = require(file)

    expect(foo).toEqual({})
  })
})
