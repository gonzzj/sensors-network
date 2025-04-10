import { expect, test } from 'vitest'
import { parseSensorsGrid } from '../utils/parseSensorsGrid'

test('Check if the sensors grid format is not OK', () => {
  expect(parseSensorsGrid('asdqwe', 2)).toStrictEqual({
    data: 'asdqwe',
    errorMsg: 'The sensors grid format is wrong',
  })
})

test('Check if the sensors grid is empty', () => {
  expect(parseSensorsGrid('[]', 2)).toStrictEqual({
    data: [],
    errorMsg: 'The sensors grid is empty',
  })
})

test('Check if the sensors grid has rows with different sizes', () => {
  expect(
    parseSensorsGrid('[[20, 34, 23], [24, 34, 63], [21]]', 2)
  ).toStrictEqual({
    data: [[20, 34, 23], [24, 34, 63], [21]],
    errorMsg: 'The sensors grid has rows with different sizes',
  })
})

test('Check if the sensors grid is OK', () => {
  expect(
    parseSensorsGrid('[["X", "X", 23], [24, "X", 63], [21, 34, "X"]]', 2)
  ).toStrictEqual({
    data: [
      ['X', 'X', 23],
      [24, 'X', 63],
      [21, 34, 'X'],
    ],
    errorMsg: '',
  })
})
