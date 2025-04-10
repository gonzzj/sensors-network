import { expect, test } from 'vitest'
import { findStableZones } from '../utils/findStableZones'

test('Check default sensors grid', () => {
  expect(
    findStableZones(
      [
        [23, 22, 22, 'X', 30],
        [24, 23, 'X', 'X', 29],
        [22, 24, 25, 30, 31],
        ['X', 'X', 25, 31, 'X'],
      ],
      2
    )
  ).toStrictEqual([
    {
      avg_temp: '22.86',
      size: 7,
    },
    {
      avg_temp: '30.20',
      size: 5,
    },
    {
      avg_temp: '25.00',
      size: 2,
    },
  ])
})
