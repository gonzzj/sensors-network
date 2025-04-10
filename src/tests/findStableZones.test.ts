import { expect, test } from 'vitest'
import { findStableZones } from '../utils/findStableZones'

test('Check default sensors grid with threshold 2', () => {
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

test('Check sensors grid edge cases', () => {
  expect(findStableZones([['X']], 2)).toStrictEqual([])
  expect(findStableZones([[23]], 2)).toStrictEqual([])
  expect(findStableZones([[]], 2)).toStrictEqual([])
})

test('Check sensors grid with one row', () => {
  expect(findStableZones([[23, 25, 31, 53, 55, 53]], 2)).toStrictEqual([
    {
      avg_temp: '24.00',
      size: 2,
    },
    {
      avg_temp: '53.67',
      size: 3,
    },
  ])

  expect(findStableZones([[23, 'X', 31, 53, 55, 'X']], 2)).toStrictEqual([
    {
      avg_temp: '54.00',
      size: 2,
    },
  ])
})

test('Check sensors grid with one column', () => {
  expect(
    findStableZones([[23], ['X'], [31], [53], [55], ['X']], 2)
  ).toStrictEqual([
    {
      avg_temp: '54.00',
      size: 2,
    },
  ])

  expect(findStableZones([[23], ['X'], [25], [27], ['X']], 2)).toStrictEqual([
    {
      avg_temp: '26.00',
      size: 2,
    },
  ])
})

test('Check sensors grid with different threshold', () => {
  expect(
    findStableZones(
      [
        [23, 22, 22, 'X', 30],
        [24, 23, 'X', 'X', 29],
        [22, 24, 25, 30, 31],
        ['X', 'X', 25, 31, 'X'],
      ],
      6
    )
  ).toStrictEqual([
    {
      avg_temp: '23.33',
      size: 9,
    },
    {
      avg_temp: '30.20',
      size: 5,
    },
  ])
})

test('Check different sensors grid and different threshold', () => {
  expect(
    findStableZones(
      [
        [23, 'X', 22, 26, 30],
        [25, 23, 'X', 'X', 29],
        [22, 'X', 25, 'X', 31],
        [23, 26, 25, 31, 'X'],
      ],
      4
    )
  ).toStrictEqual([
    {
      avg_temp: '24.00',
      size: 8,
    },
    {
      avg_temp: '24.00',
      size: 2,
    },
    {
      avg_temp: '30.00',
      size: 3,
    },
  ])
})

test('Check sensors grid with negative numbers', () => {
  expect(
    findStableZones(
      [
        [-23, 'X', -22, 26, 'X'],
        [-25, 23, 'X', 'X', 29],
        [-22, 'X', -25, 'X', 31],
        ['X', 26, -25, 31, 'X'],
      ],
      4
    )
  ).toStrictEqual([
    {
      avg_temp: '-23.33',
      size: 3,
    },
    {
      avg_temp: '30.00',
      size: 2,
    },
    {
      avg_temp: '-25.00',
      size: 2,
    },
  ])
})
